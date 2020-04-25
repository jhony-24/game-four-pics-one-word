import React from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"

const Avatar = ({ src , size }) => {

  const ctnAvatar = css(style.avatar);
  const avatar = css(style.avatar,styleDynamic({width:size,height:size}));

  return (
    <div className={ctnAvatar} >
      <img src={src} className={avatar} />
    </div>
  );
}

Avatar.defaultProps = {
  size : "45px"
}

export default Avatar;
