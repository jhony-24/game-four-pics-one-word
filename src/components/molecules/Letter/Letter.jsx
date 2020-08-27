import React, { memo } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import style from './style';
import Flex from "src/components/dom/Flex"
import { SILVER_COLOR } from 'src/theme';
import PropTypes from "prop-types"

const Letter = ({ text, background, visibilityText, color, onPressLetter }) => {
  const selfStyle = new StyleSheet.create({
    theme: {
      background,
      color
    },
    text: {
      visibility: visibilityText ? 'visible' : 'hidden'
    }
  });

  return (
    <div onClick={onPressLetter} onKeyDown={onPressLetter} role="button" tabIndex="0">
      <Flex styles={[style.f, selfStyle.theme]}>
        <span className={css(style.letter, selfStyle.text)}>{text}</span>
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
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  visibilityText: PropTypes.bool,
  color: PropTypes.string,
  onPressLetter: PropTypes.func
}

export default memo(Letter);
