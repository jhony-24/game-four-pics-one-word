import React, { memo } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import style from './style';
import PropTypes from "prop-types"

const CircleImageSquare = ({ styles, images, onClick }) => {
  
  return (
    <div className={css(style.container)}>
      <div className={css(style.containerImagesCircle, styles)} onClick={onClick} role="button" tabIndex="0" onKeyDown={onClick}>
        {
          images.map((currentImage, index) => {
            const selfStyle = new StyleSheet.create({
              image: {
                backgroundImage: `url("${currentImage}")`
              }
            })
            return (
              <div className={css(style.bgImg, selfStyle.image)} key={index}></div>
            )
          })
        }
      </div>
    </div>
  )
}

CircleImageSquare.defaultProps = {
  onClick: () => null
}

CircleImageSquare.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default memo(CircleImageSquare);
