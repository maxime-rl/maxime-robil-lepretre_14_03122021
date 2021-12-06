import React from "react";
import * as S from "./GlobalFilter.styled";

export default function GlobalFilter({ filterValue, setFilter }) {
  return (
    <S.Label>
      Search :{" "}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </S.Label>
  );
}
