import React from 'react'
import { Routes, Route } from "react-router-dom";
import { EmployeeCreationPage, EmployeeListPage, ErrorPage } from "../pages";

export default function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<EmployeeCreationPage />} />
      <Route exact path="/employee-list" element={<EmployeeListPage />} />
      <Route exact path="*" element={<ErrorPage />} />
    </Routes>
  )
}
