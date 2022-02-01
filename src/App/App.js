import React from "react";
import "./App.css";
import SideMenu from "../components/SideMenu";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header";
import { CssBaseline } from "@mui/material";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </React.Fragment>
  );
}

export default App;
