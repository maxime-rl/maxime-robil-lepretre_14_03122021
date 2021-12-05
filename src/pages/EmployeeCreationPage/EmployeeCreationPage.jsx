import React from "react";
import { EmployeeCreationForm } from "../../components";
import * as S from "./EmployeeCreationPage.styled";

export default function EmployeeCreationPage() {
  return (
    <>
      <header>
        <S.H1>Employee Creation Page</S.H1>
      </header>
      <main>
        <EmployeeCreationForm />
      </main>
    </>
  );
}
