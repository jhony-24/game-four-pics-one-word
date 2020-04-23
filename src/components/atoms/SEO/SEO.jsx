import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const SEO = ({ children, ...props }) => {
  return (
    <Fragment>
      <Helmet {...props} />
      <div className="root">
        {children}
      </div>
    </Fragment>
  )
}

export default SEO;
