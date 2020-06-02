import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import style from './style';
import PropTypes from "prop-types"

const Text = ({ children, styles, color }) => {
  const selfStyle = new StyleSheet.create({
    text: {
      color
    }
  })

  return <p className={css(style.text, selfStyle.text, styles)} >{children}</p>
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}

export default Text;
