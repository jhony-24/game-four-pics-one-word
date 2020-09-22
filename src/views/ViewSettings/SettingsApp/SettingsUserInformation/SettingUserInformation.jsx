import React from "react"
import { connect } from "react-redux"
import GraphicProgressPointStatistical from "src/components/molecules/GraphicProgressPointStatistical/GraphicProgressPointStatistical"
import useLanguage from "src/hooks/useInternationalize/useLanguage"
import { userSelectors } from "src/redux/user"
import HeaderSettings from "../Header/HeaderSettings"

const SettingUserInformation = ({ username }) => {
	const { translate } = useLanguage("game.settings.")
	return (
		<>
			<HeaderSettings
				title={username}
				details={translate("points-until-today", { count: 2 })}
				avatar="https://cdn.pixabay.com/photo/2020/04/21/10/26/animal-5072537__340.jpg"
			/>
			<GraphicProgressPointStatistical />
		</>
	)
}

const mapState = state => ({
	username: userSelectors.getUsername(state),
})
export default connect(mapState)(SettingUserInformation)
