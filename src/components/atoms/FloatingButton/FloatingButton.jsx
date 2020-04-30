import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"
import PropTypes from "prop-types"

const FloatingButton = ({ onClick, children, styles }) => {
  const floating = css(style.floatingBtn, styleDynamic(styles));
  const label = css(style.label);

  return (
    <button className={floating} onClick={onClick}>
      <label className={label} >{children}</label>
    </button>
  )
}

FloatingButton.defaultProps = {
  onClick: () => null
}

FloatingButton.propTypes = {
  onClick: PropTypes.func,
  styles: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
}

export default FloatingButton;
