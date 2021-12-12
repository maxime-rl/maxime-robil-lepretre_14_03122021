import React, { useEffect } from "react";
import { CurrentEmployeesTable } from "../../components";
import { currentEmployeesTableHead } from "../../components/table/utils/currentEmployeesTableHead";

/**
 * @name CurrentEmployeesPage
 * @returns {ReactElement}
 */
export default function CurrentEmployeesPage() {
  const employees = JSON.parse(localStorage.getItem("HRnetEmployeesSession"));

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
