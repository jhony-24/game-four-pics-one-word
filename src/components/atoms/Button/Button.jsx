import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"
import PropTypes from "prop-types"


const Button = ({ onClick, children, styles }) => {

  const btn = css(style.btn, styleDynamic(styles));
  const span = css(style.dContent);

  return (
    <button className={btn} onClick={onClick}>
      <span className={span}>{children}</span>
    </button>
  )

}


Button.defaultProps = {
  onClick: () => null
}

Button.propTypes = {
  onClick: PropTypes.func,
  styles: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
}

export default Button;
