import React from 'react';
import { css } from 'aphrodite/no-important';
import PropTypes from "prop-types"
import SButtonPrimaryCircular from 'src/components/styled/buttons/SButtonPrimaryCircular';

const FloatingButton = ({ onClick, children, styles }) => {
  return (
		<SButtonPrimaryCircular $as="button" className={css(styles)} onClick={onClick}>
        {children}
		</SButtonPrimaryCircular>
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
