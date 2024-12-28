import { LockPersonOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

function CustomErrorMessage({ name }) {
  return (
    <div
      className="error-message-container"
      style={{
        minHeight: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <ErrorMessage name={name}>
        {(msg) => (
          <div
            style={{
              color: "white",
              textAlign: "right",
              fontSize: "10px",
              backgroundColor: "#cf2c30",
              borderRadius: "4px",
              padding: msg ? "6px" : "0",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              width: "100%",
              visibility: msg ? "visible" : "hidden",
            }}
          >
            {msg && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15"
                height="15"
                viewBox="0 0 50 50"
                fill="white"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
              </svg>
            )}
            {msg && msg}
          </div>
        )}
      </ErrorMessage>
    </div>
  );
}
const loginDataValidationSchema = Yup.object({
  email: Yup.string()
    .min(1, "لطفا ایمیل خود را وارد کنید")
    .required("لطفا ایمیل خود را وارد کنید"),
  password: Yup.string()
    // .matches(passwordStrengthRegex, "قدرت پسورد کافی نیست")
    .min(1, "لطفا رمز عبور خود را وارد کنید")
    .required("لطفا رمز عبور خود را وارد کنید"),
});
const handleSubmit = async (values) => {
  const { email, password } = values;
  const url =
    "http://10.10.10.133:7080/realms/MassTest/protocol/openid-connect/token";
  const data = new URLSearchParams();
  data.append("client_id", "UserManagement");
  data.append("username", email);
  data.append("password", password);
  data.append("grant_type", "password");
  data.append("client_secret", "jLfPve2AUSXuXnmAKQKMeQqHFO8LVQit");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Response:", responseData);
    toast.success("ورود موفقیت آمیز بود", { position: "bottom-right" });
  } catch (error) {
    console.error("Error fetching token:", error);
    toast.error(error.message, { position: "bottom-right" });
  }
};

export function LoginPanel() {
  //--------------------------------------------------------------------------------------------
  return (
    <Paper
      elevation={0}
      color="transparent"
      sx={{
        position: "relative",
        p: 4,
        mx: 2,
        minHeight: 32,
        maxWidth: "350px",
        borderRadius: 6,
        background: "rgba(255, 255, 255, 0.15)",
        boxShadow:
          "0px 0px 24px rgba(133, 133, 133, 0.37),inset 0 0 1px 1px rgba(255, 255, 255, 0.45),inset -15px -15px 15px 15px rgba(0, 0, 0, 0.1)",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: "blur(6.5px)",
          WebkitBackdropFilter: "blur(6.5px)",
          borderRadius: 6,
          zIndex: -1,
        }}
      />
      <Avatar
        sx={{
          mt: 2,
          bgcolor: "rgba(0,0,0,0.2)",
          textAlign: "center",
          mx: "auto",
          width: "50px",
          height: "50px",
        }}
      >
        <LockPersonOutlined />
      </Avatar>
      <Typography
        component="h1"
        variant="h5"
        sx={{
          textAlign: "center",
          fontSize: "20px",
          color: "rgba(255,255,255,1)",
          fontWeight: "600",
          mt: 2,
        }}
      >
        سپهتن
      </Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginDataValidationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div>
              <Field
                name="email"
                as={TextField}
                variant="outlined"
                fullWidth
                label="ایمیل"
                sx={{
                  borderRadius: 2.5,
                  mt: 4,
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    height: 42,
                    fontSize: 12,
                    borderRadius: 2.5,
                    "&.Mui-focused": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                    },
                  },

                  "& label": {
                    left: "unset",
                    right: "2rem",
                    bottom: "-0.5rem",
                    transformOrigin: "right",
                    fontSize: "0.9rem",
                    mt: -0.8,
                    color: "#bfbfbf",
                    "&.Mui-focused": {
                      color: "white",
                    },
                  },
                  "& legend": {
                    textAlign: "right",
                    fontSize: "0.8rem",
                  },

                  backgroundColor: "rgba(200,200,200,0.1)",
                }}
                inputProps={{
                  style: {
                    textAlign: "left",
                    direction: "ltr",
                  },
                }}
              />
              <CustomErrorMessage
                name="email"
                style={{
                  color: "white",
                  textAlign: "right",
                  fontSize: "12px",
                  marginRight: "16px",
                  minHeight: "24px",
                }}
              />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                as={TextField}
                variant="outlined"
                fullWidth
                label="رمز عبور"
                sx={{
                  borderRadius: 2.5,
                  mt: 2,
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    textAlign: "center",
                    height: 42,
                    fontSize: 12,
                    borderRadius: 2.5,
                    "&.Mui-focused": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                    },
                  },
                  "& label": {
                    left: "unset",
                    right: "2rem",
                    bottom: "-0.5rem",
                    transformOrigin: "right",
                    fontSize: "0.9rem",
                    mt: -0.8,
                    color: "#bfbfbf",
                    "&.Mui-focused": {
                      color: "white",
                    },
                  },
                  "& legend": {
                    textAlign: "right",
                    fontSize: "0.8rem",
                  },
                  backgroundColor: "rgba(200,200,200,0.1)",
                }}
                inputProps={{
                  style: {
                    textAlign: "left",
                    direction: "ltr",
                  },
                }}
              />
              <CustomErrorMessage
                name="password"
                style={{
                  color: "white",
                  textAlign: "right",
                  fontSize: "12px",
                  marginRight: "16px",
                }}
              />
            </div>
            <div
              style={{ display: "flex", marginTop: "8px", marginRight: "8px" }}
            >
              <Field
                type="checkbox"
                name="remember"
                id="remember-checkbox"
                className="remember-checkbox"
                style={{
                  width: "13px",
                  height: "13px",
                  accentColor: "rgb(103, 118, 122)",
                }}
              />
              <label
                htmlFor="remember-checkbox"
                style={{
                  color: "#e1e1e1",
                  fontSize: "10px",
                  cursor: "pointer",
                }}
              >
                مرا به خاطر بسپار
              </label>
            </div>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              sx={{
                mt: 2,
                mb: 2,
                height: "42px",
                padding: 1,
                fontSize: 16,
                borderRadius: 8,
              }}
              style={{
                backgroundColor: "rgba(10,10,10,0.2)",
                color: "white",
              }}
            >
              {isSubmitting ? "در حال ورود" : "ورود"}
            </Button>
          </Form>
        )}
      </Formik>
      <Typography sx={{ marginTop: "auto", fontSize: "10px", color: "white" }}>
        با ورود به حساب خود شما با قوانین ما موافقت کردید. در قبال اعمال خود
        پاسخگو خواهید بود
      </Typography>
      <Toaster />
    </Paper>
  );
  //--------------------------------------------------------------------------------------------
}
