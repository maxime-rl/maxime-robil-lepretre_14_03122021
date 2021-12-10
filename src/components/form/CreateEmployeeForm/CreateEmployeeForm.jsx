import React, { useState } from "react";
import { saveToLocalStorage } from "../../../utils/divers/handleLocalStorage";
import { Modal } from "react-modal-mrl";
import { DatePicker } from "../index";
import { Select } from "../index";
import { states } from "../../../utils/data/states";
import { departments } from "../../../utils/data/departments";
import closeIcon from "../../../assets/close-icon.svg";
import * as S from "./CreateEmployeeForm.styled";

/**
 * @name CreateEmployeeForm
 * @returns {ReactElement|object}
 */
export default function CreateEmployeeForm() {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "AL",
    zipCode: "",
    department: "Engineering",
  });

  /**
   * Regex pattern for first name, last name and city entries,
   * and utils to control date entries
   */
  const nameAndCityPattern = /^([A-Za-zÀ-ÿ][-,a-z. ']+[ ]*)+$/;
  /****************************************************************/
  let dateTodayToIsoString = new Date().toISOString().substr(0, 10);
  /****************************************************************/
  let dateToday = new Date();
  let year = dateToday.getFullYear();
  let month = dateToday.getMonth();
  let day = dateToday.getDate();
  let legalAgeDateToIsoString = new Date(year - 18, month, day)
    .toISOString()
    .substr(0, 10);

  /**
   * @name checkedNameOrCityInput
   * @param {object} input firstName|lastName|city
   * @returns {boolean}
   */
  const checkedNameOrCityInput = (input) => {
    if (input.value.trim().length < 3) {
      setError(`⚠️ The ${input.name} is too short`);
      return false;
    }
    if (!nameAndCityPattern.test(input.value.trim())) {
      setError(`⚠️ The ${input.name} is not in the correct format`);
      return false;
    } else {
      setError("");
      return true;
    }
  };

  /**
   * @name checkedStreetInput
   * @param {object} input street
   * @returns {boolean}
   */
  const checkedStreetInput = (input) => {
    if (input.value.trim().length < 3) {
      setError(`⚠️ The ${input.name} is too short`);
      return false;
    } else {
      setError("");
      return true;
    }
  };

  /**
   * @name checkedDateInput
   * @param {object} input dateOfBirth|startDate
   * @returns {boolean}
   */
  const checkedDateInput = (input) => {
    let currentYear = new Date().getFullYear();
    let deadline = currentYear - 150;
    let selectedDate = input.value.split("-")[0];

    if (selectedDate < deadline) {
      setError(`⚠️ ${input.name} is not valid`);
      return false;
    } else {
      setError("");
      return true;
    }
  };

  /**
   * @name checkedZipCodeInput
   * @param {object} input zipeCode
   * @returns {boolean}
   */
  const checkedZipCodeInput = (input) => {
    if (input.value < 1) {
      setError("⚠️ The zip code must be positive");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  /**
   * we get and register the new employee in the local storage
   * @param {event}
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      checkedNameOrCityInput(e.target.firstName) &&
      checkedNameOrCityInput(e.target.lastName) &&
      checkedStreetInput(e.target.street) &&
      checkedNameOrCityInput(e.target.city) &&
      checkedDateInput(e.target.dateOfBirth) &&
      checkedDateInput(e.target.startDate) &&
      checkedZipCodeInput(e.target.zipCode)
    ) {
      setModal(!modal);
      saveToLocalStorage(formValues);
    } else {
      // Slight detail for the user experience if there is an error on mobile
      if (window.matchMedia("(max-width: 890px)").matches) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
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
      department: "Engineering",
    });
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.ErrorMessage>{error}</S.ErrorMessage>
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
            <DatePicker
              name={"dateOfBirth"}
              value={formValues.dateOfBirth}
              max={legalAgeDateToIsoString}
              onChange={handleInputChange}
              required={true}
            />
          </label>
          <label>
            <S.P>Start Date</S.P>
            <DatePicker
              name={"startDate"}
              value={formValues.startDate}
              max={dateTodayToIsoString}
              onChange={handleInputChange}
              required={true}
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
          <Select
            name={"state"}
            value={formValues.state}
            onChange={handleInputChange}
            dataOptions={states}
            required
          ></Select>
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
          <Select
            name={"department"}
            value={formValues.department}
            onChange={handleInputChange}
            dataOptions={departments}
            required
          ></Select>
        </S.LabelDepartment>
        <S.ButtonSubmit type="submit">Save</S.ButtonSubmit>
      </S.Form>
      {/* npm package react-modal-mrl Documentation -> https://www.npmjs.com/package/react-modal-mrl */}
      <Modal
        show={modal}
        close={triggerModal}
        closeIcon={closeIcon}
        title="Employee added"
      >
        <S.EmployeeName>
          {formValues.firstName} {formValues.lastName}
        </S.EmployeeName>
        <S.EmployeeInfosWrapper>
          <p>Start date: {formValues.startDate}</p>
          <p>Department: {formValues.department}</p>
        </S.EmployeeInfosWrapper>
        <S.LinkToCurrentEmployees to="/employee-list">
          list of employees
        </S.LinkToCurrentEmployees>
      </Modal>
    </>
  );
}
