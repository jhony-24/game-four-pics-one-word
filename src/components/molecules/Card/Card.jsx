import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/resources/tools/functions"
import PropTypes from "prop-types"

const Card = ({ styles, children }) => {
  const card = css(style.card, styleDynamic(styles));

  return (
    <div className={card}>
      {children}
    </div>
  )
}

Card.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
}

export default Card;
