import React, { memo } from 'react';
import { SLabelLetter, SButtonLetter } from './Letter.style';
import { SILVER_COLOR } from 'src/theme';
import PropTypes from "prop-types"

const Letter = ({ text, background, visibilityText, color, onPressLetter }) => {
  return (
		<SButtonLetter onClick={onPressLetter} $background={background} $color={color}>
			<SLabelLetter $visibility={visibilityText}>{text}</SLabelLetter>
		</SButtonLetter>
  )
}

Letter.defaultProps = {
  background: SILVER_COLOR,
  color: "black",
  visibilityText: true,
  onPressLetter: () => null,
}

Letter.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  visibilityText: PropTypes.bool,
  color: PropTypes.string,
  onPressLetter: PropTypes.func
}

export default memo(Letter);
