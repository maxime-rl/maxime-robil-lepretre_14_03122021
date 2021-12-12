import React, { useState } from "react";
import { saveToLocalStorage } from "../../../utils/divers/handleLocalStorage";
import dateInMs from "../../../utils/divers/dateInMs";
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
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    legalAge: "",
    date: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  // Regex pattern for first name, last name, city and street
  const streetPattern = /^\d+\s[A-z]+\s[A-z]+/;
  const nameAndCityPattern =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  // Constants to control dates input,
  // need to compare and verify the legal age of an employee,
  const birthDateInputDOM = document.querySelector('input[name="dateOfBirth"]');
  const startDateInputDOM = document.querySelector('input[name="startDate"]');

  // Constants to control dates
  const dateToday = new Date();
  const year = dateToday.getFullYear();
  const month = dateToday.getMonth();
  const day = dateToday.getDate();
  const dateTodayISO = new Date().toISOString().substr(0, 10);
  const legalAgeDateISO = new Date(year - 18, month, day)
    .toISOString()
    .substr(0, 10);
  const deadline = year - 150;

  /**
   * @name showUIError
   * @param {object} input
   */
  const showUIError = (input) => {
    input.style.border = "1px solid red";
    input.previousSibling.style.color = "red";
  };

  /**
   * @name hideUIError
   * @param {object} input
   */
  const hideUIError = (input) => {
    setFormErrors({ ...formErrors, [input.name]: "" });
    input.style.border = "1px solid gray";
    input.previousSibling.style.color = "#1c1c1c";
  };

  /**
   * @name checkedNameOrCityInput
   * @param {object} input firstName|lastName|city
   * @returns {boolean}
   */
  const checkedNameOrCityInput = (input) => {
    if (input.value.trim().length < 3) {
      setFormErrors({
        ...formErrors,
        [input.name]: ": 3 characters minimum ⚠️",
      });
      console.log(typeof input);
      showUIError(input);

      return false;
    }
    if (!nameAndCityPattern.test(input.value.trim())) {
      setFormErrors({
        ...formErrors,
        [input.name]: ": contains invalid characters ⚠️",
      });
      showUIError(input);

      return false;
    } else {
      setFormErrors("");

      return true;
    }
  };

  /**
   * @name checkedStreetInput
   * @param {object} input street
   * @returns {boolean}
   */
  const checkedStreetInput = (input) => {
    if (!streetPattern.test(input.value.trim())) {
      setFormErrors({
        ...formErrors,
        [input.name]: ": wrong format (ex: 65 Uriel Point) ⚠️",
      });
      showUIError(input);

      return false;
    } else {
      setFormErrors("");

      return true;
    }
  };

  /**
   * @name checkedDateInput
   * @param {object} input dateOfBirth|startDate
   * @returns {boolean}
   */
  const checkedDateInput = (input) => {
    let selectedDate = input.value.split("-")[0];

    if (selectedDate < deadline) {
      setFormErrors({
        ...formErrors,
        [input.name]: ": over 150 years 🙃",
      });
      showUIError(input);

      return false;
    } else {
      setFormErrors("");

      return true;
    }
  };

  /**
   * @name checkedZipCodeInput
   * @param {object} input zipeCode
   * @returns {boolean}
   */
  const checkedZipCodeInput = (input) => {
    if (input.value <= 0) {
      setFormErrors({
        ...formErrors,
        [input.name]: ": must be greater than 0 ⚠️",
      });
      showUIError(input);

      return false;
    } else {
      setFormErrors("");

      return true;
    }
  };

  /**
   * @name checkedLegalAge
   * @param {number} startDate
   * @param {number} birthdayOver18
   * @returns {boolean}
   */
  const checkedLegalAge = (startDate, birthdayOver18) => {
    if (startDate < birthdayOver18) {
      setFormErrors({
        ...formErrors,
        legalAge: "❌ The employee must be 18 years old",
      });
      return false;
    } else {
      setFormErrors({ ...formErrors, legalAge: "" });

      return true;
    }
  };

  /**
   * Basic handle Input Change -> think about refactoring !
   * @name handleInputChange
   * @param {event} e
   */
  const handleInputChange = (e) => {
    const currentInput = e.target;
    const selectedDate = currentInput.value.split("-")[0];

    let currentDateInMs = dateInMs(currentInput.value);
    let employeeStartDate = dateInMs(startDateInputDOM.value);
    let employeeBirthday = dateInMs(birthDateInputDOM.value);

    setFormValues({ ...formValues, [currentInput.name]: currentInput.value });

    // Consider trying to simplify listening and error handling...
    if (currentInput.type === "text") {
      if (currentInput.name === "street") {
        if (
          currentInput.value.trim() === "" ||
          streetPattern.test(currentInput.value.trim())
        ) {
          hideUIError(currentInput);
        }
      } else if (
        currentInput.value.trim() === "" ||
        currentInput.value.trim().length < 3 ||
        nameAndCityPattern.test(currentInput.value.trim())
      ) {
        hideUIError(currentInput);
      }
    } else if (currentInput.type === "date") {
      if (
        currentInput.name === "dateOfBirth" &&
        selectedDate > deadline &&
        employeeStartDate > (currentDateInMs += 567993600000)
      ) {
        setFormErrors({ ...formErrors, legalAge: "" });
      } else if (
        currentInput.name === "startDate" &&
        selectedDate > deadline &&
        currentDateInMs > (employeeBirthday += 567993600000)
      ) {
        setFormErrors({ ...formErrors, legalAge: "" });
      } else {
        hideUIError(currentInput);
      }
    } else {
      if (currentInput.value >= 0) {
        hideUIError(currentInput);
      }
    }
  };

  /**
   * we get and register the new employee in the local storage
   * @param {event}
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Constants and variables to check the legal age of the employee (18)
    const employeeStartDate = dateInMs(e.target.startDate.value);
    let employeeBirthday = dateInMs(e.target.dateOfBirth.value);
    const employeeBirthdayOver18 = (employeeBirthday += 567993600000);

    if (
      checkedNameOrCityInput(e.target.firstName) &&
      checkedNameOrCityInput(e.target.lastName) &&
      checkedStreetInput(e.target.street) &&
      checkedNameOrCityInput(e.target.city) &&
      checkedDateInput(e.target.dateOfBirth) &&
      checkedDateInput(e.target.startDate) &&
      checkedZipCodeInput(e.target.zipCode) &&
      checkedLegalAge(employeeStartDate, employeeBirthdayOver18)
    ) {
      setModal(!modal);
      saveToLocalStorage(formValues);
    } else {
      // Slight detail for the user experience if there is an error on mobile
      if (window.matchMedia("(max-width: 890px)").matches) {
        window.scrollTo({
          top: 110,
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
      legalAge: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    });
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.ErrorMessage>{formErrors.legalAge}</S.ErrorMessage>
        <S.LabelFirstName>
          <S.P>
            First Name
            <S.ErrorMessage>{formErrors.firstName}</S.ErrorMessage>
          </S.P>
          <S.Input
            name="firstName"
            type="text"
            value={formValues.firstName}
            onChange={handleInputChange}
            required={true}
          />
        </S.LabelFirstName>
        <S.LabelLastName>
          <S.P>
            Last Name<S.ErrorMessage>{formErrors.lastName}</S.ErrorMessage>
          </S.P>
          <S.Input
            name="lastName"
            type="text"
            value={formValues.lastName}
            onChange={handleInputChange}
            required={true}
          />
        </S.LabelLastName>
        <S.DateWrapper>
          <label>
            <S.P>
              Date of Birth
              <S.ErrorMessage>{formErrors.dateOfBirth}</S.ErrorMessage>
            </S.P>
            <DatePicker
              name={"dateOfBirth"}
              value={formValues.dateOfBirth}
              max={legalAgeDateISO}
              onChange={handleInputChange}
              required={true}
            />
          </label>
          <label>
            <S.P>
              Start Date<S.ErrorMessage>{formErrors.startDate}</S.ErrorMessage>
            </S.P>
            <DatePicker
              name={"startDate"}
              value={formValues.startDate}
              max={dateTodayISO}
              onChange={handleInputChange}
              required={true}
            />
          </label>
        </S.DateWrapper>
        <S.AddressTitle>Address</S.AddressTitle>
        <S.LabelStreet>
          <S.P>
            Street<S.ErrorMessage>{formErrors.street}</S.ErrorMessage>
          </S.P>
          <S.Input
            name="street"
            type="text"
            value={formValues.street}
            onChange={handleInputChange}
            required={true}
          />
        </S.LabelStreet>
        <S.LabelCity>
          <S.P>
            City<S.ErrorMessage>{formErrors.city}</S.ErrorMessage>
          </S.P>
          <S.Input
            name="city"
            type="text"
            value={formValues.city}
            onChange={handleInputChange}
            required={true}
          />
        </S.LabelCity>
        <S.LabelState>
          <S.P>
            State<S.ErrorMessage>{formErrors.state}</S.ErrorMessage>
          </S.P>
          <Select
            name={"state"}
            value={formValues.state}
            onChange={handleInputChange}
            dataOptions={states}
            required={true}
          ></Select>
        </S.LabelState>
        <S.LabelZipeCode>
          <S.P>
            Zip Code<S.ErrorMessage>{formErrors.zipCode}</S.ErrorMessage>
          </S.P>
          <S.Input
            name="zipCode"
            type="number"
            value={formValues.zipCode}
            onChange={handleInputChange}
            required={true}
          />
        </S.LabelZipeCode>
        <S.LabelDepartment>
          <S.P>
            Department<S.ErrorMessage>{formErrors.department}</S.ErrorMessage>
          </S.P>
          <Select
            name={"department"}
            value={formValues.department}
            onChange={handleInputChange}
            dataOptions={departments}
            required={true}
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
