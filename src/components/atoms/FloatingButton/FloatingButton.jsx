import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"



const FloatingButton = ({onClick,children,styles}) => {

  const floating = css(style.floatingBtn,styleDynamic(styles));
  const label = css(style.label);

  return(
    <div className={floating} onClick={onClick}>
      <label className={label} >{children}</label>
    </div>
  )

}


FloatingButton.defaultProps = {
  onClick : () => null
}



export default FloatingButton;
