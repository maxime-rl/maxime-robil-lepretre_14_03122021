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

export const Input = styled.input`
  width: 98%;
  border: 1px solid gray;
  border-radius: 0.3rem;
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
    width: 99%;
    height: 3rem;

    @media (min-width: 500px) {
      width: 98%;
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
  color: red;
`;

export const EmployeeName = styled.p`
  font-weight: 500;
`;

export const EmployeeInfosWrapper = styled.div`
  @media (min-width: 891px) {
    display: flex;
    gap: 2.5rem;
  }
`;

export const LinkToCurrentEmployees = styled(Link)`
  text-decoration: underline;
`;