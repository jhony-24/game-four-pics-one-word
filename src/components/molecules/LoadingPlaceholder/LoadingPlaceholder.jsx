import React, { memo } from 'react';
import { css } from 'aphrodite/no-important';
import style from "./style";
import Flex from "src/components/dom/Flex"
import Skeleton from "react-loading-skeleton"



const LoadingPlaceholder = ({ sizecircle, heightbar, repeat }) => {

  let array = Array(repeat).fill(0);
  let width = 250;

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



export default memo(LoadingPlaceholder);
