import React, { useEffect } from "react";
import { CurrentEmployeesTable } from "../../components";
import { currentEmployeesTableHead } from "../../components/CurrentEmployeesTable/utils/currentEmployeesTableHead";

export default function CurrentEmployeesPage() {
  const currentEmployees = JSON.parse(
    localStorage.getItem("HRnetEmployeesSession")
  );

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
          data={currentEmployees}
        />
      </main>
    </>
  );
}
