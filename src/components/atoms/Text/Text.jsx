import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"


const Text = ({ children, styles ,  color }) => {

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


export default Text;
