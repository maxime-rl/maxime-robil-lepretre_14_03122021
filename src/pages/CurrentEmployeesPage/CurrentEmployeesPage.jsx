import React, { useEffect } from "react";
import { CurrentEmployeesTable } from "../../components";
import { headOfTableOfEmployeeList } from "../../utils/data";
import { loadToLocalStorage } from "../../utils/localStorage/loadToLocalStorage";

export default function CurrentEmployeesPage() {
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
          columns={headOfTableOfEmployeeList}
          data={loadToLocalStorage}
        />
      </main>
    </>
  );
}
