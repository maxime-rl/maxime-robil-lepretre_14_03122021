import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateEmployeePage, EmployeesPage, ErrorPage } from "../pages";

/**
 * App routing
 * @name Routing
 * @returns {function}
 */
export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<CreateEmployeePage />} />
      <Route path="/employee-list" element={<EmployeesPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
