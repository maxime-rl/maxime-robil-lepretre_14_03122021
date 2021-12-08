import React from "react";
import { useState } from "react";
import { saveToLocalStorage } from "../../utils/localStorage/saveToLocalStorage";
import { Modal } from "react-modal-mrl";
import { Link } from "react-router-dom";
import { states } from "../../utils/data/states";
import { departments } from "../../utils/data/departments";
import * as S from "./CreateEmployeeForm.styled";

/**
 * @name CreateEmployeeForm
 * @returns {ReactElement|object}
 */
export default function CreateEmployeeForm() {
  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "AL",
    zipCode: "",
    department: "Sales",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  /**
   * we get and register the new employee in the local storage
   * @param {event}
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(!modal);
    saveToLocalStorage(formValues);
  };

  const triggerModal = () => {
    setModal(!modal);
    setFormValues({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "AL",
      zipCode: "",
      department: "Sales",
    });
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.LabelFirstName>
          <S.P>First Name</S.P>
          <S.Input
            name="firstName"
            type="text"
            value={formValues.firstName}
            onChange={handleInputChange}
            required
          />
        </S.LabelFirstName>
        <S.LabelLastName>
          <S.P>Last Name</S.P>
          <S.Input
            name="lastName"
            type="text"
            value={formValues.lastName}
            onChange={handleInputChange}
            required
          />
        </S.LabelLastName>
        <S.DateWrapper>
          <label>
            <S.P>Date of Birth</S.P>
            <S.Input
              name="dateOfBirth"
              type="date"
              value={formValues.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            <S.P>Start Date</S.P>
            <S.Input
              name="startDate"
              type="date"
              value={formValues.startDate}
              onChange={handleInputChange}
              required
            />
          </label>
        </S.DateWrapper>
        <S.AddressTitle>Address</S.AddressTitle>
        <S.LabelStreet>
          <S.P>Street</S.P>
          <S.Input
            name="street"
            type="text"
            value={formValues.street}
            onChange={handleInputChange}
            required
          />
        </S.LabelStreet>
        <S.LabelCity>
          <S.P>City</S.P>
          <S.Input
            name="city"
            type="text"
            value={formValues.city}
            onChange={handleInputChange}
            required
          />
        </S.LabelCity>
        <S.LabelState>
          <S.P>State</S.P>
          <S.Select
            name="state"
            value={formValues.state}
            onChange={handleInputChange}
            required
          >
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.name}
              </option>
            ))}
          </S.Select>
        </S.LabelState>
        <S.LabelZipeCode>
          <S.P>Zip Code</S.P>
          <S.Input
            name="zipCode"
            type="number"
            value={formValues.zipCode}
            onChange={handleInputChange}
            required
          />
        </S.LabelZipeCode>
        <S.LabelDepartment>
          <S.P>Department</S.P>
          <S.Select
            name="department"
            value={formValues.department}
            onChange={handleInputChange}
            required
          >
            {departments.map((department) => (
              <option key={department.value} value={department.value}>
                {department.name}
              </option>
            ))}
          </S.Select>
        </S.LabelDepartment>
        <S.ButtonSubmit type="submit">Save</S.ButtonSubmit>
      </S.Form>
      {/* npm plugin react-modal-mrl Documentation -> https://www.npmjs.com/package/react-modal-mrl */}
      <Modal show={modal} close={triggerModal} title="Employee saved">
        <p>
          {formValues.firstName} {formValues.lastName}
        </p>
        <p>Department: {formValues.department}</p>
        <Link to="/employee-list">See current employees</Link>
      </Modal>
    </>
  );
}
