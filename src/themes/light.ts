import { ThemeOptions } from "@mui/material";
import { indigo, purple } from "@mui/material/colors";

const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: indigo[700],
    },
    secondary: {
      main: purple[500],
    },
  },
};

export default lightTheme;
