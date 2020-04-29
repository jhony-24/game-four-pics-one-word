import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import ButtonViewInMobile from 'src/components/molecules/ButtonViewInMobile';
import PropTypes from "prop-types"

const SEO = ({ children, ...props }) => {
  return (
    <Fragment>
      <Helmet {...props} />
      <div className="root">
        {children}
      </div>
      <ButtonViewInMobile />
    </Fragment>
  )
}

SEO.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
}

export default SEO;
