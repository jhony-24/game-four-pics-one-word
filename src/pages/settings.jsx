import React from "react"
import Fade from "src/components/animations/Fade"
import CheckLogged from "src/components/hoc/CheckLogged"
import SEO from "src/components/atoms/SEO"
import ViewSettings from "src/views/ViewSettings"

const Settings = () => (
	<SEO title="my settings">
		<div className="settings">
			<Fade type="in">
				<ViewSettings />
			</Fade>
		</div>
	</SEO>
)

export default CheckLogged(Settings)
