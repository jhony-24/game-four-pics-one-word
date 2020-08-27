import React, { memo } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import style from './style';
import Flex from "src/components/dom/Flex"
import { TEXT_SECONDARY } from 'src/theme';
import PropTypes from "prop-types"

const Loading = ({ color, colortext, text, size }) => {
  const selfStyle = new StyleSheet.create({
    loading: {
      borderLeftColor: color, width: size, height: size
    },
    text: {
      color: colortext
    }
  })

  return (
    <Flex styles={style.flex}>
      <div className={css(style.loading, selfStyle.loading)}></div>
      {
        text && <div className={css(style.textLoading, selfStyle.text)}>{text}</div>
      }
    </Flex>
  )
}

Loading.defaultProps = {
  color: TEXT_SECONDARY,
  colortext: "gray",
  size: "30px"
}

Loading.propTypes = {
  color: PropTypes.string,
  colortext: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string
}

export default memo(Loading);
