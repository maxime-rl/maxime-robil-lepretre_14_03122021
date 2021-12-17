import React, { useEffect } from "react";

// Component
import { EmployeesTable } from "../../components";

// Utils functions
import checkedLocalStorage from "../../utils/divers/handleLocalStorage";

// Utils datas
import { employeesTableHead } from "../../utils/data/employeesTableHead";
import { mockEmployees } from "../../utils/data/mockEmployees";

/**
 * @name CurrentEmployeesPage
 * @returns {ReactElement}
 */
export default function CurrentEmployeesPage() {
  // As long as the app is using local storage, we check it again in case the user
  // dumps their local storage while browsing the application...
  const employees = JSON.parse(localStorage.getItem("HRnetEmployeesSession"));
  checkedLocalStorage(employees, mockEmployees);

  useEffect(() => {
    document.title = "Current employees";
  }, []);

  return (
    <>
      <header>
        <h1>Employees</h1>
      </header>
      <main>
        <EmployeesTable columns={employeesTableHead} data={employees} />
      </main>
    </>
  );
}
