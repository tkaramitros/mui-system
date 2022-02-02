import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

export const useForm = (initialFValues) => {
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
};

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "500px",
      margin: theme.spacing(1),
      align: "left",
    },
  },
}));

export const Form = (props) => {
  const classes = useStyle();
  return (
    <form className={classes.root} autoComplete="off">
      {props.children}
    </form>
  );
};
