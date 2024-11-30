import { createTheme } from "@mui/material";
import { lime } from "@mui/material/colors";
import { faIR } from "@mui/material/locale";

export default createTheme(
  {
    palette: {
      primary: lime,
    },
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: "14px",
          },
        },
      },
    },
  },
  faIR,
  {
    direction: "rtl",
  },
);
