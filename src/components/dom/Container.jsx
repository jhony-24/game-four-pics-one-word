import React from 'react';
import { css, StyleSheet } from "aphrodite/no-important"

const style = StyleSheet.create({
  box: {
    width: "100%"
  }
})

const Container = ({ styles, children }) => {
  return (
    <div className={css(style.box, styles)} >
      {children}
    </div>
  )
};

export default Container;
