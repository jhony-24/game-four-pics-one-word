import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"




const FlatList = ({styles,headerStyle,footerStyle,data,renderItem,headerList,footerList}) => {


  const list = css(style.flatLs,styleDynamic(styles));
  const header = css(style.flatLsHeader,styleDynamic(headerStyle));
  const footer = css(style.flatLsFooter,styleDynamic(footerStyle));
  const itemRender = css(style.flatLsRender);


  return(
    <div className={list}>
        <div className={header}>{headerList}</div>
        <div className={itemRender}>
          {
            data.map((currentData,index) => renderItem(currentData,index) )
          }
        </div>
        <div className={footer}>{footerList}</div>
    </div>
  )
  
}



FlatList.defaultProps = {
  data : []
}



export default FlatList;
