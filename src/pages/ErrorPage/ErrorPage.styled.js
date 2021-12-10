import styled from "styled-components";
import { Link } from "react-router-dom";
// import { styleVariables } from "../../../utils/styles/variables";

export const ErrorPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 5.6rem);
`;

export const Title = styled.h1`
  @media (min-width: 891px) {
    font-size: 7rem;
  }
`;

export const HomePageLink = styled(Link)`
  margin-bottom: 10rem;
  text-decoration: underline;
`;
