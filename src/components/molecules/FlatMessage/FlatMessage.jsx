import React, { useState } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import style from './style';
import Flex from "src/components/dom/Flex"
import { IoIosCloseCircle } from "react-icons/io";
import { motion as Hide, AnimatePresence } from 'framer-motion';
import PropTypes from "prop-types"

const FlatMessage = ({ text, textColor, iconColor, verticalMargin, horizontalMargin }) => {
  const [visible, setVisible] = useState(true);
  const animateExit = { opacity: 0 };
  const textStyle = { color: textColor };
  const selfStyle = new StyleSheet.create({
    flex: {
      margin: `${verticalMargin || 0}px ${horizontalMargin || 0}px`
    }
  });
  const removeFlatMessage = () => {
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {
        visible && (
          <Hide.div exit={animateExit}>
            <Flex styles={[style.message, selfStyle.flex]}>
              <span className={css(style.tM, textStyle)}>{text}</span>
              <span className={css(style.bM)} role="button" tabIndex="0" onClick={removeFlatMessage} onKeyDown={removeFlatMessage}>
                <IoIosCloseCircle color={iconColor} size={20} />
              </span>
            </Flex>
          </Hide.div>
        )
      }
    </AnimatePresence>
  )
}

FlatMessage.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  textColor: PropTypes.string,
  iconColor: PropTypes.string,
  verticalMargin: PropTypes.number,
  horizontalMargin: PropTypes.number
}

export default FlatMessage;
