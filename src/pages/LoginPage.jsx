import { Container, Paper } from "@mui/material";
import { LoginPanel } from "../features/login/components/LoginPanel";

export const LoginPage = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "95vh" }}>
      <Paper
        className="login-page-main-container"
        elevation={0}
        sx={{
          position: "relative",
          backgroundImage: "url(./starry-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          objectFit: "cover",
          height: "100vh",
        }}
      >
        <LoginPanel />
      </Paper>
    </Container>
  );
};
