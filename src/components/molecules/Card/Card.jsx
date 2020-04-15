import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"


const Card = ({styles,children}) => {
 
  const card = css(style.card,styleDynamic(styles));

  return(
    <div className={card}>
      {children}
    </div>
  )

}


export default Card;
