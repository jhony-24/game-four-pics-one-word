import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import Flex from 'src/components/dom/Flex';



const RowItem = ({styles,leftBody,centerBody,rightBody,onClick}) => {

  return(
    <Flex styles={{...style.flex._definition,...styles}}>
      <div className={css(style.row,style.ex)}>{leftBody}</div>
      <div className={css(style.row,style.center)} onClick={onClick}>{centerBody}</div>
      <div className={css(style.row,style.ex)}>{rightBody}</div>
    </Flex>
  )

}




RowItem.defaultProps = {
  onClick : () => null
}




export default RowItem;
