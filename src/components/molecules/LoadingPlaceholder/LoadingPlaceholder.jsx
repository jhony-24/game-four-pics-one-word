import React, { memo } from 'react';
import { css } from 'aphrodite/no-important';
import style from "./style";
import Flex from "src/components/dom/Flex"
import Skeleton from "react-loading-skeleton"
import PropTypes from "prop-types"

const LoadingPlaceholder = ({ sizecircle, heightbar, repeat }) => {
  const array = Array(repeat).fill(0);
  const width = 250;

  return (
    <Flex styles={{ ...style.f._definition }}>
      {
        array.map((e, i) => (
          <Flex styles={{ ...style.fr._definition }} key={i}>
            <span className={css(style.r)}>
              <Skeleton width={sizecircle} height={sizecircle} circle={true} />
            </span>
            <span className={css(style.r)}>
              <Skeleton width={width} height={heightbar} />
            </span>
          </Flex>
        ))
      }
    </Flex>
  )
}

LoadingPlaceholder.defaultProps = {
  repeat: 5,
  sizecircle: 40,
  heightbar: 40
}

LoadingPlaceholder.propTypes = {
  sizecircle: PropTypes.number,
  heightbar: PropTypes.number,
  repeat: PropTypes.number
}

export default memo(LoadingPlaceholder);
