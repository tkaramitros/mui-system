import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmendId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = (props) => {
  const { addOrEdit, recordForEdit } = props;
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? "" : "This field is required";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            variant="outlined"
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.CheckBox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button text="Submit" type="submit" color="primary" />
            <Controls.Button
              text="Reset"
              color="secondary"
              onClick={resetForm}
              style={{ textTransform: "none", marginLeft: "15px" }}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
