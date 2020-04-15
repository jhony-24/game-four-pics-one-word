import React, { memo } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"
import Flex from "src/components/dom/Flex"
import { TEXT_SECONDARY } from 'src/tools/constants';




const Loading = ({color,colortext,text}) => {

  const flex = {...style.flex._definition};
  const loadingStyle = css(style.loading,styleDynamic({borderLeftColor:color}));
  const textStyle = css(style.textLoading,styleDynamic({color:colortext}));

  return(
    <Flex styles={flex}>
        <div className={loadingStyle}></div>
        {
          text && <div className={textStyle}>{text}</div>
        }
    </Flex>
  )
}




Loading.defaultProps  = {
  color : TEXT_SECONDARY,
  colortext : "gray"
}




export default memo(Loading);
