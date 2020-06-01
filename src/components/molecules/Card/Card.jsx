import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import PropTypes from "prop-types"

const Card = ({ styles, children }) => {

  return (
    <div className={css(style.card, styles)}>
      {children}
    </div>
  )
}

Card.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
}

export default Card;
