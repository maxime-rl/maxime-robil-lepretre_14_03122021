import React from "react";
import PropTypes from "prop-types";
import * as S from "./DatePicker.styled";

export default function DatePicker({
  title,
  name,
  max,
  value,
  onChange,
  required,
}) {
  return (
    <S.DatePicker>
      <S.P>{title}</S.P>
      <S.Input
        name={name}
        type="date"
        max={max}
        value={value}
        onChange={onChange}
        required={required}
      />
    </S.DatePicker>
  );
}

DatePicker.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  max: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
