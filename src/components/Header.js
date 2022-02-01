import React from "react";
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

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
