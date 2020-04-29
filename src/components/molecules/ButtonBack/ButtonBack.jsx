import React from 'react';
import IconNatural from "src/components/atoms/IconNatural"
import { IoIosArrowBack } from "react-icons/io"
import PropTypes from "prop-types"

const ButtonBack = ({ color }) => {
  return (
    <span onClick={() => window.history.back()}>
      <IconNatural icon={<IoIosArrowBack size={20} />} coloricon={color} />
    </span>
  );
}

ButtonBack.propTypes = {
  color : PropTypes.string
}

export default ButtonBack;
