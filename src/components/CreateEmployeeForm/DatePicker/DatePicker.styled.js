import styled from "styled-components";
import { styleVariables } from "../../../utils/styles/variables";

export const DatePicker = styled.label`
  grid-area: date-picker;
`;

export const P = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin: ${styleVariables.measureBasic} 0 1rem 0;
`;

export const Input = styled.input`
  width: 98%;
`;
