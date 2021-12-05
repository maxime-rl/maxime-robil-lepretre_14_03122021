import React from "react";
import { EmployeeListTable } from "../../components";
import { headOfTableOfEmployeeList } from "../../utils/data";
import { loadToLocalStorage } from "../../utils/localStorage/loadToLocalStorage";

export default function EmployeeListPage() {
  return (
    <>
      <header>
        <h1>Employee List Page</h1>
      </header>
      <main>
        <form>
          <label>
            Employee search
            <input type="text" name="keyword" placeholder="search" />
          </label>
        </form>
        <EmployeeListTable
          columns={headOfTableOfEmployeeList}
          data={loadToLocalStorage}
        />
      </main>
    </>
  );
}
