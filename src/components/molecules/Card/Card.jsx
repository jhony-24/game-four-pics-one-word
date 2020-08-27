import React from 'react';
import { css } from 'aphrodite/no-important';
import PropTypes from "prop-types"
import SCardGradientPrimary from 'src/components/styled/cards/SCardGradientPrimary';

const Card = ({ styles, children }) => {

  return (
    <SCardGradientPrimary className={css(styles)}>
      {children}
    </SCardGradientPrimary>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
}

export default Card;
