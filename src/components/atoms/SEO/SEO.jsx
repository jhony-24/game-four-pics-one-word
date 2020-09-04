import React from "react"
import Helmet from "react-helmet"
import ButtonViewInMobile from "src/components/molecules/ButtonViewInMobile"
import PropTypes from "prop-types"

const SEO = ({ children, ...props }) => {
	return (
		<>
			<Helmet {...props}>
				<link rel="canonical" href={`${window.location}`} />
			</Helmet>
			<div className="root">{children}</div>
			<ButtonViewInMobile />
		</>
	)
}

SEO.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
}

export default SEO
