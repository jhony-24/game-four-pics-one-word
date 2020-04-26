import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"

const Avatar = ({ color , src , size , icon }) => {

  const avatar = css(style.avatar,styleDynamic({
    width:size,
    height:size,
    background : color
  }));

  return (
    <div className={avatar} >
      { src && <img src={src} alt={src} className={avatar} /> }
      { icon && icon }
    </div>
  );
}

Avatar.defaultProps = {
  size : "45px",
  color : "rgb(230,230,230)",
  icon : null,
  src : null
}

export default Avatar;
