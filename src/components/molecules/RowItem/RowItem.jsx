import React from 'react';
import style, { SFlexNone, SFlexCenterFluid } from './RowItem.style';
import Flex from 'src/components/dom/Flex';
import PropTypes from "prop-types"

const RowItem = ({ styles, leftBody, centerBody, rightBody, onClick }) => {
  return (
    <Flex styles={[style.flex, styles]} >
			<SFlexNone>{leftBody}</SFlexNone>
      <SFlexCenterFluid onClick={onClick} onKeyDown={onClick} role="button" tabIndex="0" >{centerBody}</SFlexCenterFluid>
			<SFlexNone>{rightBody}</SFlexNone>
    </Flex >
  )
}

RowItem.defaultProps = {
  onClick: () => null
}

RowItem.propTypes = {
  leftBody: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  centerBody: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  rightBody: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  onClick: PropTypes.func
}

export default RowItem;
