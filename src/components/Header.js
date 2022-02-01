import React from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
} from "@mui/material";
import { NotificationsNone as NotificationsNoneIcon } from "@mui/icons-material";
import { ChatBubbleOutline as ChatBubbleOutlineIcon } from "@mui/icons-material";
import { PowerSettingsNew as PowerSettingsNewIcon } from "@mui/icons-material";
import { Search as SearchIcon } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    transform: "translateZ(0)",
  },
  searchInput: {
    opacity: "0.6",
    padding: "0px 8px",
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      className={classes.root}
      style={{ backgroundColor: "#fff" }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search topics"
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
