import styled from "styled-components";
import { styleVariables } from "../../utils/styles/variables";

export const Form = styled.form`
  margin: ${styleVariables.measureLarger} auto;
  padding: ${styleVariables.measureBasic};
  max-width: 45rem;
  box-shadow: ${styleVariables.boxShadow};
  border-radius: ${styleVariables.radius};
`;

export const P = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin: ${styleVariables.measureBasic} 0 1rem 0;
`;

export const Input = styled.input`
  width: 98%;
  height: 2.8rem;
`;

export const DateWrapper = styled.div`
  display: flex;
  gap: ${styleVariables.measureBasic};

  label {
    flex: 0.5;
  }

  input {
    padding: 0;
  }
`;

export const Fieldset = styled.fieldset`
  position: relative;
  margin-bottom: 2.5rem;
  padding: 0;
  border: none;

  &::after {
    position: absolute;
    top: -7px;
    right: 0;
    width: 82%;
    height: 1px;
    background: gray;
    opacity: 0.3;

    @media (min-width: 500px) {
      content: "";
    }
  }

  input {
    width: 98.5%;
  }
`;

export const Legend = styled.legend`
  margin: ${styleVariables.measureLarger} 0 0 0;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Select = styled.select`
  width: 100%;
  height: 3.3rem;
  cursor: pointer;
`;

export const ButtonSubmit = styled.button`
  margin: ${styleVariables.measureBasic} 0;
  width: 100%;
  height: 3.3rem;
  cursor: pointer;
`;
