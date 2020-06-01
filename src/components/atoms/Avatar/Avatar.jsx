import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import style from './style';
import PropTypes from "prop-types"

const Avatar = ({ color, src, size, icon }) => {
  const selfStyle = new StyleSheet.create({
    avatar: {
      width: size,
      height: size,
      background: color
    }
  })
  const avatar = css(style.avatar, selfStyle.avatar);

  return (
    <div className={avatar} >
      {src && <img src={src} alt={src} className={avatar} />}
      {icon && icon}
    </div>
  )
}

Avatar.defaultProps = {
  size: "45px",
  color: "rgb(230,230,230)",
  icon: null,
  src: null
}

Avatar.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.element,
  src: PropTypes.string
}

export default Avatar;
