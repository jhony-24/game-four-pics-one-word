import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import Flex from "../../dom/Flex"
import { styleDynamic } from "src/resources/tools/functions"
import PropTypes from "prop-types"

const IconNatural = ({ styles, icon, text, coloricon, colortext }) => {
  const flex = { ...style.flex._definition, ...styles };
  const iconStyle = css(style.iconic, styleDynamic({ color: coloricon }));
  const textStyle = css(style.texticon, styleDynamic({ color: colortext }));

  return (
    <Flex styles={flex}>
      <div className={iconStyle}>{icon}</div>
      {
        text && <div className={textStyle}>{text}</div>
      }
    </Flex>
  )
}

IconNatural.defaultProps = {
  icon: '',
  text: '',
}

IconNatural.propTypes = {
  styles: PropTypes.object,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  coloricon: PropTypes.string,
  colortext: PropTypes.string
}

export default IconNatural;
