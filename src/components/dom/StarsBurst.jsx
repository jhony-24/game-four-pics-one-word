import React, { useState } from 'react';
import { motion as Appearance } from 'framer-motion';
import { MdStar } from "react-icons/md"
import { css, StyleSheet } from "aphrodite/no-important"
import { styleDynamic } from "src/resources/tools/functions"

const style = StyleSheet.create({
  cStars: {
    textAlign: "center",
    position: "relative",
    padding: 10
  },
  star: {
    position: "absolute",
    margin: "0 auto",
    width: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: 100
  }
})

const StarsBurst = ({ children, radius = 80, colortext, colorstar }) => {

  const propsStyles = styleDynamic({ color: colortext });
  const [visible, setVisible] = useState(true);
  const animate = (i) => ({
    x: Math.cos(i + 1) * radius,
    y: Math.sin(i + 1) * radius,
    opacity: 0,
    scale: 2
  });

  return (
    <div className={css(style.cStars, propsStyles)} >
      <Appearance.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </Appearance.span>
      {
        visible &&
        Array(10).fill(0).map((e, i) => (
          <Appearance.div
            key={i}
            animate={animate(i)}
            className={css(style.star)}
            transition={{ duration: 1.2 }}
            onAnimationComplete={() => setVisible(false)}>
            <MdStar color={colorstar} size={10} />
          </Appearance.div>
        ))
      }
    </div>
  )
}

StarsBurst.defaultProps = {
  colortext: "rgb(60,60,60)",
  colorstar: "darkorange"
}

export default StarsBurst;
