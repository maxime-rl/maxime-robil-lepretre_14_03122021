import React from "react";
import { useState } from "react";
import { saveToLocalStorage } from "../../utils/localStorage/saveToLocalStorage";
import * as S from "./EmployeeCreationForm.styled";

export default function EmployeeCreationForm() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    locationState: "",
    zipCode: "",
    department: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveToLocalStorage(formValues);
    alert("Employee created !");
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <label>
          <S.P>First Name</S.P>
          <S.Input
            name="firstName"
            type="text"
            value={formValues.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <S.P>Last Name</S.P>
          <S.Input
            name="lastName"
            type="text"
            value={formValues.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
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
        <S.Fieldset>
          <S.Legend>Address</S.Legend>
          <label>
            <S.P>Street</S.P>
            <S.Input
              name="street"
              type="text"
              value={formValues.street}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            <S.P>City</S.P>
            <S.Input
              name="city"
              type="text"
              value={formValues.city}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            <S.P>State</S.P>
            <S.Select
              name="locationState"
              value={formValues.locationState}
              onChange={handleInputChange}
              required
            >
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="American Samoa">American Samoa</option>
            </S.Select>
          </label>
          <label>
            <S.P>Zip Code</S.P>
            <S.Input
              name="zipCode"
              type="number"
              value={formValues.zipCode}
              onChange={handleInputChange}
              required
            />
          </label>
        </S.Fieldset>
        <label>
          <S.P>Department</S.P>
          <S.Select
            name="department"
            value={formValues.department}
            onChange={handleInputChange}
            required
          >
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
          </S.Select>
        </label>
        <S.ButtonSubmit type="submit">Save</S.ButtonSubmit>
      </S.Form>
    </>
  );
}
