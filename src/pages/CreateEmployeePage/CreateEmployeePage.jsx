import React, { useEffect } from "react";
import { CreateEmployeeForm } from "../../components";
import checkedLocalStorage from "../../utils/divers/handleLocalStorage";
import { mockEmployees } from "../../utils/data/mockEmployees";

/**
 * @name CreateEmployeePage
 * @returns {ReactElement}
 */
export default function CreateEmployeePage() {
  const employees = JSON.parse(localStorage.getItem("HRnetEmployeesSession"));
  checkedLocalStorage(employees, mockEmployees);

  useEffect(() => {
    document.title = "Create employee";
  }, []);

  return (
    <>
      <header>
        <h1>Create employee</h1>
      </header>
      <main>
        <CreateEmployeeForm />
      </main>
    </>
  );
}
