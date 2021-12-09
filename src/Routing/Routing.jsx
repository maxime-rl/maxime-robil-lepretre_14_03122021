import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../utils/divers/ScrollToTop";
import { CreateEmployeePage, CurrentEmployeesPage, ErrorPage } from "../pages";

/**
 * App routing
 * @name Routing
 * @returns {function}
 */
export default function Routing() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<CreateEmployeePage />} />
        <Route path="/employee-list" element={<CurrentEmployeesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ScrollToTop>
  );
}
