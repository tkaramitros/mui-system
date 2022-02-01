import React from "react";
import "./App.css";
import SideMenu from "../components/SideMenu";
import { makeStyles, ThemeProvider } from "@mui/styles";
import Header from "../components/Header";
import { createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  background: {
    default: "#f4f5fd",
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
