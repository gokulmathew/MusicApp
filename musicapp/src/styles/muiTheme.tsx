import { createTheme } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";

 const theme = createTheme({
    typography: {
      fontFamily: ["Gill Sans", "sans-serif"].join(","),
      fontSize: 16,
    },
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  export default theme;