import React from "react";
import { Routes, Route } from "react-router-dom";
import { EmployeeCreationPage, EmployeeListPage, ErrorPage } from "../pages";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeCreationPage />} />
      <Route path="/employee-list" element={<EmployeeListPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
