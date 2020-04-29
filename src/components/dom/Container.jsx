import React from 'react';
import { css } from "aphrodite/no-important"

const Container = ({styles,children}) => {
  return(
      <div className={css(styles)} >
          {children}
      </div>
  )
};

export default Container;
