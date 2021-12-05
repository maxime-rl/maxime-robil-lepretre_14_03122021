import React, { useEffect } from "react";
import Tbody from "../table/Tbody/Tbody";
import Thead from "../table/Thead/Thead";

export default function EmployeeListTable() {
  const employeesArray = JSON.parse(localStorage.getItem("session"));

  useEffect(() => {
    document.title = "list of employees";
  }, []);

  const headOfTableOfEmployeeList = [
    "First name",
    "Last name",
    "Date of birth",
    "Start date",
    "Street",
    "City",
    "State",
    "Zipcode",
    "Department",
  ];

  return (
    <>
      <table>
        <Thead elts={headOfTableOfEmployeeList} />
        <Tbody elts={employeesArray} />
      </table>
    </>
  );
}
