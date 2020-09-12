import React, { useRef, memo } from 'react';
import { motion as Graphic } from "framer-motion";
import { css } from 'aphrodite/no-important';
import style from "./style"
import { useEffect } from 'react';
import { TEXT_SECONDARY } from 'src/theme';
import SWrapperContainer from 'src/components/styled/wrappers/SWrapperContainer';

var data = []
for (var i = 0; i < 100; i++) {
  data.push({
    points: Math.random() * 40,
    date: i / 2
  })
}

const GraphicProgressPointStatistical = () => {
  const canvas = useRef();

  useEffect(() => {

    const renderStatistical = () => {
      let draw = canvas.current.getContext("2d");
      let gradient = draw.createLinearGradient(0,0,170,0);
      draw.clearRect(0,0,canvas.current.width,canvas.current.height);
      gradient.addColorStop("0.05", "silver");
      gradient.addColorStop("0.5", TEXT_SECONDARY);
      gradient.addColorStop("0.9", "blue");
      draw.strokeStyle = gradient;
      draw.lineWidth = 2;
      draw.beginPath();
      for (const currentIndex in data) {
        draw.lineTo(data[currentIndex].date * 10, data[currentIndex].points * 2);
      }
      draw.stroke();
      draw.closePath();
    }
  
    renderStatistical();
  });

  return (
    <SWrapperContainer>
      <Graphic.canvas className={css(style.canvas)} ref={canvas} />
    </SWrapperContainer>
  )
};

export default memo(GraphicProgressPointStatistical);
