import styled from "styled-components";
import { styleVariables } from "../../utils/styles/variables";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`
  margin: ${styleVariables.measureBasic};
  border-spacing: 0;
  border: 1px solid black;

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem 1rem;
    height: 2.8rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 0;
    }
  }
`;

export const ResultsIndicator = styled.div`
  margin: 0 ${styleVariables.measureBasic};
`;
