import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"




const CircleImageSquare = ({styles,images,onClick,coloricon}) => {

  const ctn = css(style.container);
  const ctnImage = css(style.containerImagesCircle,styleDynamic(styles));


  return(
    <div className={ctn}>
        <div className={ctnImage} onClick={onClick}>
          {
            images.map((currentImage,index)=>{
              let image = {backgroundImage:`url("${currentImage}")`};
              return(
                <div className={css(style.bgImg,styleDynamic(image))} key={index}></div>
              )
            })
          }
        </div>
    </div>
  )

}



CircleImageSquare.defaultProps = {
  onClick : () => null
}



export default CircleImageSquare;
