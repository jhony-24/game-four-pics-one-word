import React from "react"
import Helmet from "react-helmet"
import ButtonViewInMobile from "src/components/molecules/ButtonViewInMobile"
import PropTypes from "prop-types"
import useSiteMetadata from "src/hooks/useLocation/useSiteMetadata"

const SEO = ({ children, ...props }) => {
	const { siteURL } = useSiteMetadata();
	return (
		<>
			<Helmet {...props}>
				<link rel="canonical" href={siteURL} />
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
