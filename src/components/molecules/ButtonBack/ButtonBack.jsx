import React from 'react';
import IconNatural from "src/components/atoms/IconNatural"
import { IoIosArrowBack } from "react-icons/io"
import PropTypes from "prop-types"

const ButtonBack = ({ color }) => {
  return (
    <button onClick={() => window.history.back()} className="btn-back" >
      <IconNatural icon={<IoIosArrowBack size={20} />} coloricon={color} />
    </button>
  );
}

ButtonBack.propTypes = {
  color : PropTypes.string
}

export default ButtonBack;
