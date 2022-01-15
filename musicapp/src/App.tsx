import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import ErrorBoundary from "./components/ErrorBoundary";
import AppRoutes from "./routes/index";
import { getSongs } from "./actions";
import theme from "./styles/muiTheme";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongs());
    // eslint-disable-next-line
  }, []);
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
