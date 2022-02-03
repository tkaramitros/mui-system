import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import Controls from "./controls/Controls";
import CloseIcon from "@mui/icons-material/Close";

const Popup = (props) => {
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <Dialog open={openPopup} maxWidth="lg" style={{ paddingBottom: "300px" }}>
      <DialogTitle style={{ paddingRight: "0px" }}>
        <div style={{ display: "flex", marginLeft: "30px" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="secondary"
            size="sm"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
        <DialogContent dividers>{children}</DialogContent>
      </DialogTitle>
    </Dialog>
  );
};

export default Popup;
