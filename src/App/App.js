import React from "react";
import "./App.css";
import SideMenu from "../components/SideMenu";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import Employees from "../pages/employees/Employees";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: " #3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: " #f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

console.log(theme);

const App = () => {
  const classes = useStyles();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />

          <Employees />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
