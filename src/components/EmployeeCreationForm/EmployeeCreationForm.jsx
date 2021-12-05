import React from "react";
import { useState } from "react";
import { saveToLocalStorage } from "../../utils/localStorage/saveToLocalStorage";

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
      <form onSubmit={handleSubmit}>
        <label>
          <p>First Name</p>
          <input
            name="firstName"
            type="text"
            value={formValues.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <p>Last Name</p>
          <input
            name="lastName"
            type="text"
            value={formValues.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <p>Date of Birth</p>
          <input
            name="dateOfBirth"
            type="date"
            value={formValues.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <p>Start Date</p>
          <input
            name="startDate"
            type="date"
            value={formValues.startDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <fieldset>
          <legend>Address</legend>
          <label>
            <p>Street</p>
            <input
              name="street"
              type="text"
              value={formValues.street}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            <p>City</p>
            <input
              name="city"
              type="text"
              value={formValues.city}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            <p>State</p>
            <select
              name="state"
              value={formValues.locationState}
              onChange={handleInputChange}
              required
            >
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="American Samoa">American Samoa</option>
            </select>
          </label>
          <label>
            <p>Zip Code</p>
            <input
              name="zipCode"
              type="number"
              value={formValues.zipCode}
              onChange={handleInputChange}
              required
            />
          </label>
        </fieldset>
        <label>
          <p>Department</p>
          <select
            name="department"
            value={formValues.department}
            onChange={handleInputChange}
            required
          >
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
          </select>
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
