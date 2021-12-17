import React, { useState } from "react";
// Components
import { Modal } from "react-modal-mrl";
import { Input } from "../index";
import { Select } from "../index";
// Utils functions
import { saveToLocalStorage } from "../../../utils/divers/handleLocalStorage";
import dateInMs from "../../../utils/divers/dateInMs";
import capitalizeFirstLetter from "../../../utils/divers/capitalizeFirstLetter";
// Utils datas (hard data for form selects)
import { states } from "../../../utils/data/states";
import { departments } from "../../../utils/data/departments";
// Assets
import closeIcon from "../../../assets/close-icon.svg";
// Styles
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
  const streetPattern = /^\d{1,4}(?:[-\s]\d{1,4})?\s[A-z]+/;
  const zipCodePattern = /^\d{4}(?:[-\s]\d{4})?$/;
  const nameAndCityPattern =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

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
        [input.name]:
          ": wrong format (ex: 65 Uriel Point or 65-66 Uriel 5bis...) ⚠️",
      });
      showUIError(input);

      return false;
    } else {
      setFormErrors("");

      return true;
    }
  };

  /**
   * @name checkedBirthdayInput
   * @param {object} input dateOfBirth|startDate
   * @returns {boolean}
   */
  const checkedBirthdayInput = (input, startDateInput) => {
    let selectedDate = input.value.split("-")[0];

    if (selectedDate < deadline) {
      setFormErrors({
        ...formErrors,
        [input.name]: ": over 200 years... 🤔",
        [startDateInput.name]: "",
        legalAge: "",
      });
      showUIError(input);
      startDateInput.style.border = "1px solid gray";
      startDateInput.previousSibling.style.color = "#1c1c1c";

      return false;
    } else {
      setFormErrors("");

      return true;
    }
  };

  /**
   * @name checkedStartDateInput
   * @param {number} startDate
   * @param {number} birthday
   * @param {object} startDateInput
   * @returns {boolean}
   */
  const checkedStartDateInput = (birthday, startDate, startDateInput) => {
    if (birthday > startDate) {
      setFormErrors({
        ...formErrors,
        [startDateInput.name]: ": under date of birth 🤔",
        legalAge: "",
      });
      showUIError(startDateInput);

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
  const checkedLegalAge = (
    startDate,
    birthdayOver18,
    birthday,
    startDateInput
  ) => {
    if (startDate < birthdayOver18 && birthday < startDate) {
      setFormErrors({
        ...formErrors,
        legalAge: "❌ The employee must be 18 years old",
        [startDateInput.name]: "",
      });
      startDateInput.style.border = "1px solid gray";
      startDateInput.previousSibling.style.color = "#1c1c1c";

      return false;
    } else if (birthday > startDate) {
      setFormErrors({
        ...formErrors,
        [startDateInput.name]: ": under date of birth 🤔",
        legalAge: "",
      });
      showUIError(startDateInput);

      return false;
    } else {
      setFormErrors({ ...formErrors, legalAge: "" });

      return true;
    }
  };

  /**
   * @name checkedZipCodeInput
   * @param {object} input zipeCode
   * @returns {boolean}
   */
  const checkedZipCodeInput = (input) => {
    if (!zipCodePattern.test(input.value.trim())) {
      setFormErrors({
        ...formErrors,
        [input.name]: ": wrong format (ex: 2569 or 8569-7854...) ⚠️",
      });
      showUIError(input);

      return false;
    } else {
      setFormErrors("");

      return true;
    }
  };

  /**
   * @name handleInputByTypeText
   * @param {object} input
   */
  const handleInputTypeText = (input) => {
    if (input.name === "street") {
      if (input.value.trim() === "" || streetPattern.test(input.value.trim())) {
        hideUIError(input);
      }
    } else if (input.name === "zipCode") {
      if (zipCodePattern.test(input.value.trim())) {
        hideUIError(input);
      }
    } else if (
      input.value.trim() === "" ||
      input.value.trim().length < 3 ||
      nameAndCityPattern.test(input.value.trim())
    ) {
      hideUIError(input);
    }
  };

  /**
   * @name handleInputByTypeDate
   * @param {object} input
   * @param {string} selectedDate
   * @param {number} employeeStartDate
   * @param {number} currentDateInMs
   * @param {number} employeeBirthday
   */
  const handleInputTypeDate = (
    input,
    selectedDate,
    employeeStartDate,
    currentDateInMs,
    employeeBirthday
  ) => {
    if (
      input.name === "dateOfBirth" &&
      selectedDate > deadline &&
      employeeStartDate > (currentDateInMs += 567993600000)
    ) {
      setFormErrors({ ...formErrors, legalAge: "" });
    } else if (
      input.name === "startDate" &&
      selectedDate > deadline &&
      currentDateInMs > (employeeBirthday += 567993600000)
    ) {
      setFormErrors({ ...formErrors, legalAge: "" });
    } else {
      hideUIError(input);
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

    // Constants and variables to control dates input,
    // need to compare and verify the legal age of an employee,
    const startDateInputDOM = document.querySelector('input[name="startDate"]');
    const birthDateInputDOM = document.querySelector(
      'input[name="dateOfBirth"]'
    );
    let currentDateInMs = dateInMs(currentInput.value);
    let employeeStartDate = dateInMs(startDateInputDOM.value);
    let employeeBirthday = dateInMs(birthDateInputDOM.value);

    setFormValues({
      ...formValues,
      [currentInput.name]: capitalizeFirstLetter(currentInput.value),
    });

    if (currentInput.type === "text") {
      handleInputTypeText(currentInput);
    } else if (currentInput.type === "date") {
      handleInputTypeDate(
        currentInput,
        selectedDate,
        employeeStartDate,
        currentDateInMs,
        employeeBirthday
      );
    }
  };

  /**
   * we get and register the new employee in the local storage
   * @param {event}
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Constants and variables to check the legal age of the employee (18),
    // and compare the start date to the anniversary date
    const employeeStartDateMs = dateInMs(e.target.startDate.value);
    const employeeBirthdayMs = dateInMs(e.target.dateOfBirth.value);

    let employeeBirthday = dateInMs(e.target.dateOfBirth.value);
    const employeeBirthdayOver18 = (employeeBirthday += 567993600000);

    if (
      checkedNameOrCityInput(e.target.firstName) &&
      checkedNameOrCityInput(e.target.lastName) &&
      checkedStreetInput(e.target.street) &&
      checkedNameOrCityInput(e.target.city) &&
      checkedBirthdayInput(e.target.dateOfBirth, e.target.startDate) &&
      checkedStartDateInput(
        employeeBirthdayMs,
        employeeStartDateMs,
        e.target.startDate
      ) &&
      checkedLegalAge(
        employeeStartDateMs,
        employeeBirthdayOver18,
        employeeBirthdayMs,
        e.target.startDate
      ) &&
      checkedZipCodeInput(e.target.zipCode)
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
        <S.ErrorLegalAgeMessage>{formErrors.legalAge}</S.ErrorLegalAgeMessage>
        <S.LabelFirstName>
          <S.P>
            First Name
            <S.ErrorMessage>{formErrors.firstName}</S.ErrorMessage>
          </S.P>
          <Input
            type={"text"}
            name={"firstName"}
            value={formValues.firstName}
            onChange={handleInputChange}
            required={true}
          />
        </S.LabelFirstName>
        <S.LabelLastName>
          <S.P>
            Last Name<S.ErrorMessage>{formErrors.lastName}</S.ErrorMessage>
          </S.P>
          <Input
            type={"text"}
            name={"lastName"}
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
            <Input
              type={"date"}
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
            <Input
              type={"date"}
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
          <Input
            type={"text"}
            name={"street"}
            value={formValues.street}
            onChange={handleInputChange}
            required={true}
          />
        </S.LabelStreet>
        <S.LabelCity>
          <S.P>
            City<S.ErrorMessage>{formErrors.city}</S.ErrorMessage>
          </S.P>
          <Input
            type={"text"}
            name={"city"}
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
          <Input
            name={"zipCode"}
            type={"text"}
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
        title="Registered employee"
      >
        <S.ModalWrapper>
          <S.EmployeeName>
            Name:{" "}
            <span>
              {formValues.firstName} {formValues.lastName}
            </span>
          </S.EmployeeName>
          <S.EmployeeDetailsWrapper>
            <S.EmployeeDetails>
              Start: <span>{formValues.startDate}</span>
            </S.EmployeeDetails>
            <S.EmployeeDetails>
              Dptm: <span>{formValues.department}</span>
            </S.EmployeeDetails>
          </S.EmployeeDetailsWrapper>
          <S.LinkToCurrentEmployees to="/employee-list">
            list of employees
          </S.LinkToCurrentEmployees>
        </S.ModalWrapper>
      </Modal>
    </>
  );
}
