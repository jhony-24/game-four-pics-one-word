import React, { memo } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/resources/tools/functions"
import PropTypes from "prop-types"

const CircleImageSquare = ({ styles, images, onClick }) => {
  const ctn = css(style.container);
  const ctnImage = css(style.containerImagesCircle, styleDynamic(styles));

  return (
    <div className={ctn}>
      <div className={ctnImage} onClick={onClick} role="button" tabIndex="0" onKeyDown={onClick}>
        {
          images.map((currentImage, index) => {
            let image = { backgroundImage: `url("${currentImage}")` };
            return (
              <div className={css(style.bgImg, styleDynamic(image))} key={index}></div>
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
  styles: PropTypes.object,
  images: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default memo(CircleImageSquare);
