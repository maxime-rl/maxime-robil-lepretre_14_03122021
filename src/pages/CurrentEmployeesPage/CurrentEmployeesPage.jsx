import React, { useEffect } from "react";
import { CurrentEmployeesTable } from "../../components";
import { currentEmployeesTableHead } from "../../components/table/utils/currentEmployeesTableHead";
import checkedLocalStorage from "../../utils/divers/handleLocalStorage";
import { mockEmployees } from "../../utils/data/mockEmployees";

/**
 * @name CurrentEmployeesPage
 * @returns {ReactElement}
 */
export default function CurrentEmployeesPage() {
  const employees = JSON.parse(localStorage.getItem("HRnetEmployeesSession"));
  checkedLocalStorage(employees, mockEmployees);

  useEffect(() => {
    document.title = "Current employees";
  }, []);

  return (
    <>
      <header>
        <h1>Current employees</h1>
      </header>
      <main>
        <CurrentEmployeesTable
          columns={currentEmployeesTableHead}
          data={employees}
        />
      </main>
    </>
  );
}
