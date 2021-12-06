import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateEmployeePage, CurrentEmployeesPage, ErrorPage } from "../pages";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<CreateEmployeePage />} />
      <Route path="/employee-list" element={<CurrentEmployeesPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
