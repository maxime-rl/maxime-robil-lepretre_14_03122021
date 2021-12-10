import React from "react";
import * as S from "./ErrorPage.styled";

/**
 * @name ErrorPage
 * @returns {ReactElement}
 */
export default function ErrorPage() {
  return (
    <S.ErrorPageWrapper>
      <S.Title>Error 404</S.Title>
      <S.HomePageLink to="/">Back to Home</S.HomePageLink>
    </S.ErrorPageWrapper>
  );
}
