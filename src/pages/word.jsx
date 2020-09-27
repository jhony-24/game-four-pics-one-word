import React from "react"
import CheckLogged from "src/components/hoc/CheckLogged"
import ViewDiscoverWord from "src/views/ViewDiscoverWord"
import { navigate } from "gatsby"
import Fade from "src/components/animations/Fade"
import SEO from "src/components/atoms/SEO"

const Word = () => {
	const state = clientWindow().history.state
	if (state !== null) {
		return (
			<SEO title="guess word now">
				<Fade>
					<ViewDiscoverWord state={state} />
				</Fade>
			</SEO>
		)
	} else {
		navigate("/list")
		return null
	}
}

export default CheckLogged(Word)
