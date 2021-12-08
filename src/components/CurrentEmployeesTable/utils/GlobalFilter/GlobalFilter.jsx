import React from "react";
import PropTypes from "prop-types";

/**
 * Optional component of the hook react-table to search table data
 * @name GlobalFilter
 * @param {string} filterValue
 * @param {function} setFilter
 * @returns
 */
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

GlobalFilter.propTypes = {
  filterValue: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};
