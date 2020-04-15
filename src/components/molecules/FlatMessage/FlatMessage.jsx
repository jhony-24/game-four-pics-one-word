import React, { useState } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"
import Flex from "src/components/dom/Flex"
import { IoIosCloseCircle } from "react-icons/io";
import { motion as Hide, AnimatePresence } from 'framer-motion';



const FlatMessage = ( {text,textColor,iconColor,verticalMargin,horizontalMargin} ) => {

  let [ visible , setVisible ] = useState(1);
  let animateExit = { opacity : 0 };

  let textStyle = { color : textColor };
  let styleFlex = { margin : `${verticalMargin || 0}px ${horizontalMargin || 0}px`};
  let flexStyle = {...style.message._definition,...styleFlex};

  const tM = css(style.tM,styleDynamic(textStyle))
  const bM = css(style.bM);

  return(
    <AnimatePresence>
      {
        visible && (
        <Hide.div exit={animateExit}>
          <Flex styles={flexStyle}>
              <span className={tM}>{text}</span>
              <span className={bM} onClick={()=>setVisible(0)}><IoIosCloseCircle color={iconColor} size={20}/></span>
          </Flex>
        </Hide.div>
        )
      }
    </AnimatePresence>
  )  

}




export default FlatMessage;
