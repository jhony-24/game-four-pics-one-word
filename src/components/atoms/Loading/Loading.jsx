import React, { memo } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"
import Flex from "src/components/dom/Flex"
import { TEXT_SECONDARY } from 'src/tools/constants';
import PropTypes from "prop-types"


const Loading = ({ color, colortext, text, size }) => {

  const flex = { ...style.flex._definition };
  const loadingStyle = css(style.loading, styleDynamic({ borderLeftColor: color, width: size, height: size }));
  const textStyle = css(style.textLoading, styleDynamic({ color: colortext }));

  return (
    <Flex styles={flex}>
      <div className={loadingStyle}></div>
      {
        text && <div className={textStyle}>{text}</div>
      }
    </Flex>
  )
}


Loading.defaultProps = {
  color: TEXT_SECONDARY,
  colortext: "gray",
  size: "30px"
}

Loading.PropTypes = {
  color: PropTypes.string,
  colortext: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string
}

export default memo(Loading);
