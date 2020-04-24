import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import ButtonViewInMobile from 'src/components/molecules/ButtonViewInMobile';

const SEO = ({ children, ...props }) => {
  return (
    <Fragment>
      <Helmet {...props} />
      <div className="root">
        {children}
      </div>
      <ButtonViewInMobile/>
    </Fragment>
  )
}

export default SEO;
