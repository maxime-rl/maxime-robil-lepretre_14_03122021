import React from "react";
import PropTypes from "prop-types";
import * as S from "./DatePicker.styled";

/**
 * @name DatePicker
 * @param {string} name
 * @param {string} value
 * @param {string} max
 * @param {func} onChange
 * @param {bool} required
 * @returns
 */
export default function DatePicker({ name, value, max, onChange, required }) {
  return (
    <S.DatePicker
      name={name}
      type="date"
      max={max}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  max: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
