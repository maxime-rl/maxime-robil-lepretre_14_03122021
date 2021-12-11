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
 * @returns {ReactElement}
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
      <option value="">-- select an {name} --</option>
      {dataOptions
        .sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))
        .map((data, index) => (
          <option key={index} value={data.value}>
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
