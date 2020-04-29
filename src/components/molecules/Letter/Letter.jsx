import React, { memo } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"
import Flex from "src/components/dom/Flex"
import { SILVER_COLOR } from 'src/tools/constants';
import PropTypes from "prop-types"


const Letter = ({ text, background, visibilityText, color, onPressLetter }) => {

  const allStyles = { background, color }
  const flex = { ...style.f._definition, ...allStyles };
  const letterStyle = css(style.letter, styleDynamic({
    visibility: visibilityText ? 'visible' : 'hidden'
  }));

  return (
    <div onClick={onPressLetter}>
      <Flex styles={flex}>
        <span className={letterStyle}>{text}</span>
      </Flex>
    </div>
  )

}


Letter.defaultProps = {
  background: SILVER_COLOR,
  color: "black",
  visibilityText: true,
  onPressLetter: () => null,
}

Letter.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string,
  visibilityText: PropTypes.bool,
  color: PropTypes.string,
  onPressLetter: PropTypes.func
}

export default memo(Letter);
