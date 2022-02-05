import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
  const { text, size, color, variant, onClick, ...other } = props;

  return (
    <MuiButton
      style={{ textTransform: "none" }}
      variant={variant || "contained"}
      size={size || "large"}
      color={color}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
