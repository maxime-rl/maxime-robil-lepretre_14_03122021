import styled from "styled-components";
import { styleVariables } from "../../../utils/styles/variables";

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
  flex-wrap: wrap;
  margin: ${styleVariables.measureBasic};
`;

export const SelectPageSize = styled.select`
  margin-bottom: 1.5rem;
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
    max-width: 12rem;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 0;
    }
  }
`;

export const Th = styled.th`
  height: 3rem;
  ${({ active }) =>
    active &&
    `
    background: #f1f1f1;
  `}

  &:hover {
    background: #f1f1f1;
  }
`;

export const TableFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 1.5rem 1.5rem 1.5rem;

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    margin: ${styleVariables.measureBasic};
  }

  p {
    margin: 0 0 1.5rem 0;

    @media (min-width: 700px) {
      margin: 0;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1.5rem;

  @media (min-width: 700px) {
    flex-direction: row;
    width: fit-content;
    gap: 0;
  }
`;

export const GoToPage = styled.span`
  order: 1;

  @media (min-width: 700px) {
    order: 0;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 15rem;
  height: fit-content;

  @media (min-width: 700px) {
    margin-left: 3rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.32rem;
    height: 3.32rem;
    cursor: pointer;
  }

  button:first-child {
    margin-right: 0.5rem;
  }

  button:last-child {
    margin-left: 0.5rem;
  }

  button[disabled] {
    cursor: not-allowed;
  }

  span {
    margin: 0 ${styleVariables.measureBasic};
  }
`;
