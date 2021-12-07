import React from "react";

export default function GlobalFilter({ filterValue, setFilter }) {
  return (
    <label>
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search"
      />
    </label>
  );
}
