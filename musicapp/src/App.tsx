import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import ErrorBoundary from "./components/ErrorBoundary";
import AppRoutes from "./routes/index";
import { getSongs } from "./actions";
import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Gill Sans", "sans-serif"].join(","),
    fontSize: 16,
  },
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongs());
    // eslint-disable-next-line
  }, []);
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <div>
          <AppRoutes />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
