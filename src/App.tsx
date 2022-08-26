import { createTheme } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationMenu from "./components/shared/NavigationMenu";

import { CssBaseline, ThemeProvider } from "@mui/material";
import light from "./themes/light";
import dark from "./themes/dark";
import HomePage from "./pages/home/HomePage";
import { useSelector, useDispatch } from "react-redux";
import { setInitialProblems } from "./redux/problemSlice";
import { RootState } from "./redux/store";

function App() {
  // store data
  const dispatch = useDispatch();

  const mode = useSelector((state: RootState) => state.layout.mode);
  const theme = React.useMemo(
    () => createTheme(mode === "light" ? light : dark),
    [mode]
  );

  useEffect(() => {
    dispatch(setInitialProblems());
  }, [dispatch]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationMenu />
        <Container sx={{ margin: "100px auto" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
