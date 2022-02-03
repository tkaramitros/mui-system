import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const Notification = (props) => {
  const { notify, setNotify } = props;

  const handleClose = (event, reason) => {
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      style={{ top: "72px" }}
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
