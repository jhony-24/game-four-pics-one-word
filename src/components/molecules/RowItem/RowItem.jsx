import React from 'react';
import { SFlexNone, SFlexCenterFluid, SFlexContainer } from './RowItem.style';
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important';

const RowItem = ({ $hover, styles, leftBody, centerBody, rightBody, onClick }) => {
  return (
    <SFlexContainer $hover={$hover} className={css(styles)}>
			<SFlexNone>{leftBody}</SFlexNone>
      <SFlexCenterFluid onClick={onClick} onKeyDown={onClick} role="button" tabIndex="0" >{centerBody}</SFlexCenterFluid>
			<SFlexNone>{rightBody}</SFlexNone>
    </SFlexContainer>
  )
}

RowItem.defaultProps = {
  onClick: () => null
}

RowItem.propTypes = {
  leftBody: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  centerBody: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
	rightBody: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
	$hover : PropTypes.bool,
  onClick: PropTypes.func
}

export default RowItem;
