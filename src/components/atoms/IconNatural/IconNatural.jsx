import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import style from './style';
import Flex from "../../dom/Flex"
import PropTypes from "prop-types"

const IconNatural = ({ styles, icon, text, coloricon, colortext }) => {
  const selfStyle = new StyleSheet.create({
    icon: {
      color: coloricon
    },
    text: {
      color: colortext
    }
  })

  return (
    <Flex styles={[style.flex, styles]}>
      <div className={css(style.iconic, selfStyle.icon)}>{icon}</div>
      {text && (
        <div className={css(style.texticon, selfStyle.text)}>{text}</div>
      )}
    </Flex>
  )
}

IconNatural.defaultProps = {
  icon: '',
  text: '',
}

IconNatural.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  coloricon: PropTypes.string,
  colortext: PropTypes.string
}

export default IconNatural;
