import React from "react";
import PropTypes from "prop-types";
import * as S from "./Select.styled";

/**
 * @name Select
 * @param {string} name
 * @param {string} value
 * @param {func} onChange
 * @param {array} dataOptions
 * @param {bool} required
 * @returns
 */
export default function Select({
  name,
  value,
  onChange,
  dataOptions,
  required,
}) {
  return (
    <S.Select name={name} value={value} onChange={onChange} required={required}>
      {dataOptions.map((data) => (
        <option key={data.value} value={data.value}>
          {data.name}
        </option>
      ))}
    </S.Select>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  dataOptions: PropTypes.array,
  required: PropTypes.bool,
};
