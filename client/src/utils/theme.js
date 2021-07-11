import { createTheme  } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createTheme ({
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  palette: {
    primary: {
      main: "#000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
