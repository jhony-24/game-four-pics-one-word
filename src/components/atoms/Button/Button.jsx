import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"


const Button = ({onClick,children,styles}) => {
  
  const btn = css(style.btn,styleDynamic(styles));
  const span = css(style.dContent);

  return(
    <div className={btn} onClick={onClick} >
      <span className={span}>{children}</span>
    </div>
  )
  
}



Button.defaultProps = {
  onClick : () => null
}



export default Button;
