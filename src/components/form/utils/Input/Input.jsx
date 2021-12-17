import React from "react";
import PropTypes from "prop-types";
import * as S from "./Input.styled";

/**
 * @name Input
 * @param {object} props
 * @returns {ReactElement}
 */
export default function Input({ ...props }) {
  const { type, name, value, min, max, onChange, required } = props;

  return (
    <S.Input
      type={type}
      name={name}
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      required={required}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
