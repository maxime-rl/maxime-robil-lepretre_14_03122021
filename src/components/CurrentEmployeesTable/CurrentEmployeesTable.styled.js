import styled from "styled-components";
import { styleVariables } from "../../utils/styles/variables";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem 3rem 1.5rem;
  overflow: auto;
  border-radius: ${styleVariables.radius};
  box-shadow: ${styleVariables.boxShadow};
`;

export const SearchAndPageSize = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${styleVariables.measureBasic};
`;

export const SelectPageSize = styled.select`
  height: 3.32rem;
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

export const Th = styled.th`
  ${({ active }) =>
    active &&
    `
    background: #f1f1f1;
  `}

  &:hover {
    background: #f1f1f1;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${styleVariables.measureBasic};

  p {
    margin: 0;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 15rem;
  height: fit-content;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.32rem;
    height: 3.32rem;
    cursor: pointer;
  }

  button[disabled] {
    cursor: not-allowed;
  }

  span {
    margin: 0 ${styleVariables.measureBasic};
  }
`;
