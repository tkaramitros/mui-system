import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import { PeopleOutlineTwoTone } from "@mui/icons-material";
import { Paper, TableBody, TableCell, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Adress (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department", disableSorting: true },
];

const Employees = () => {
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const { TblContainer, TblHead, TblPagination, recordsAfterPaginAndSorting } =
    useTable(records, headCells);

  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        {/*<EmployeeForm />*/}
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPaginAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
};

export default Employees;
