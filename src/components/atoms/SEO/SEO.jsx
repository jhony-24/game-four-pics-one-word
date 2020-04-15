import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const SEO = ({ children, ...props }) => {
  return (
    <Fragment>
      <Helmet {...props} />
      {children}
    </Fragment>
  )
}

export default SEO;
