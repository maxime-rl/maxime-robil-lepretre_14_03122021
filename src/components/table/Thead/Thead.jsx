import React from "react";

export default function Thead({ elts }) {
  return (
    <thead>
      <tr>{elts && elts.map((elt, i) => <th key={i}>{elt}</th>)}</tr>
    </thead>
  );
}
