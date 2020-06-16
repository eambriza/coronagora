import { createMuiTheme } from "@material-ui/core/styles";
//import white from "@material-ui/core/colors/white";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
