import React from "react";
import { EmployeeListTable } from "../../components";

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
        <EmployeeListTable />
      </main>
    </>
  );
}
