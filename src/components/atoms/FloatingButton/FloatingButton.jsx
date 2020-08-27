import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import PropTypes from "prop-types"

const FloatingButton = ({ onClick, children, styles }) => {
  return (
    <button className={css(style.floatingBtn, styles)} onClick={onClick}>
      <span className={css(style.label)}>
        {children}
      </span>
    </button>
  )
}

FloatingButton.defaultProps = {
  onClick: () => null
}

FloatingButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
}

export default FloatingButton;
