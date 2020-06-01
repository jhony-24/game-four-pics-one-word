import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import PropTypes from "prop-types"

const FloatingButton = ({ onClick, children, styles }) => {

  return (
    <button className={css(style.floatingBtn, styles)} onClick={onClick}>
      <label className={css(style.label)} >
        {children}
      </label>
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
