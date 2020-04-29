import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"
import PropTypes from "prop-types"


const Text = ({ children, styles, color }) => {

  const textStyle = css(style.text, styleDynamic({
    color,
    ...styles,
  }));

  return (
    <p className={textStyle} >
      {children}
    </p>
  )
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  styles: PropTypes.object,
  color: PropTypes.string
}

export default Text;
