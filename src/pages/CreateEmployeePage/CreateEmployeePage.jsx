import React, { useEffect } from "react";
import { CreateEmployeeForm } from "../../components";

export default function CreateEmployeePage() {
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
