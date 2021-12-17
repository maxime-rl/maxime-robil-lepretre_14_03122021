import React from "react";
import PropTypes from "prop-types";
import * as S from "./Select.styled";

/**
 * @name Select
 * @param {object} props
 * @returns {ReactElement}
 */
export default function Select({ ...props }) {
  const { name, value, onChange, required, dataOptions } = props;

  return (
    <S.Select name={name} value={value} onChange={onChange} required={required}>
      <option value="">-- select a {name} --</option>
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
