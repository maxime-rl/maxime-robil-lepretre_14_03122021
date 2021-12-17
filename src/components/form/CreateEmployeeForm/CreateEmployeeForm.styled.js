import styled from "styled-components";
import { Link } from "react-router-dom";
import { styleVariables } from "../../../utils/styles/variables";

export const Form = styled.form`
  margin: ${styleVariables.measureLarger} ${styleVariables.measureBasic};
  padding: ${styleVariables.measureBasic};
  max-width: 40rem;
  box-shadow: ${styleVariables.boxShadow};
  border-radius: ${styleVariables.radius};

  @media (min-width: 478px) {
    margin: ${styleVariables.measureLarger} auto;
  }

  @media (min-width: 891px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      " . address-title"
      "first-name street"
      "last-name city"
      "date-wrapper state"
      "department zipe-code"
      "button-submit button-submit";
    max-width: 83rem;
    gap: 1.5rem;
  }
`;

export const P = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin: ${styleVariables.measureBasic} 0 1rem 0;
`;

export const LabelFirstName = styled.label`
  grid-area: first-name;
`;

export const LabelLastName = styled.label`
  grid-area: last-name;
`;

export const DateWrapper = styled.div`
  grid-area: date-wrapper;
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
    gap: ${styleVariables.measureBasic};
  }

  label {
    flex: 0.5;
  }

  input {
    padding: 0;
    width: 99.5%;
    height: 3rem;

    @media (min-width: 891px) {
      width: 99%;
    }
  }
`;

export const AddressTitle = styled.p`
  grid-area: address-title;
  font-size: 1.8rem;
  font-weight: 500;

  @media (min-width: 891px) {
    margin-bottom: -1rem;
    margin-top: 1rem;
  }
`;

export const LabelStreet = styled.label`
  grid-area: street;
`;

export const LabelCity = styled.label`
  grid-area: city;
`;

export const LabelState = styled.label`
  grid-area: state;
`;

export const LabelZipeCode = styled.label`
  grid-area: zipe-code;
`;

export const LabelDepartment = styled.label`
  grid-area: department;
`;

export const ButtonSubmit = styled.button`
  grid-area: button-submit;
  margin: ${styleVariables.measureBasic} 0;
  width: 100%;
  height: 3.16rem;
`;

export const ErrorMessage = styled.span`
  margin-left: 0.3rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: red;
`;

export const ErrorLegalAgeMessage = styled.span`
  position: relative;
  top: 1rem;
  font-size: 1.2rem;
  color: red;
`;

export const ModalWrapper = styled.div`
  margin: 0 0 1.5rem 0;
`;

export const EmployeeName = styled.p`
  margin: 2.5rem 0;

  @media (min-width: 891px) {
    margin: 2.5rem 0 0.5rem 0;
  }

  span {
    font-weight: 500;
  }
`;

export const EmployeeDetailsWrapper = styled.div`
  margin: 0 0 2rem 0;

  @media (min-width: 891px) {
    display: flex;
    gap: 2.5rem;
  }

  p {
    margin: 1rem 0;
  }
`;

export const EmployeeDetails = styled.p`
  span {
    font-weight: 500;
  }
`;

export const LinkToCurrentEmployees = styled(Link)`
  text-decoration: underline;
`;
