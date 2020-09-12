import React, { Fragment, useEffect } from "react"
import RowSoundActive from "./dependencies/RowConfiguration/RowSoundActive"
import RowRename from "./dependencies/RowConfiguration/RowRename"
import { connect } from "react-redux"
import { userSelectors, userActions } from "src/redux/user"
import HeaderSettings from "./dependencies/Header/HeaderSettings"
import RowPassword from "./dependencies/RowConfiguration/RowPassword"
import GraphicProgressPointStatistical from "src/components/molecules/GraphicProgressPointStatistical"
import RowLogout from "./dependencies/RowConfiguration/RowLogout"

const SettingsApp = ({ getUser, username }) => {
	useEffect(() => {
		getUser()
	}, [getUser])

	return (
		<Fragment>
			<HeaderSettings
				title={username}
				details={"33 puntos hasta hoy"}
				avatar="https://cdn.pixabay.com/photo/2020/04/21/10/26/animal-5072537__340.jpg"
			/>
			<GraphicProgressPointStatistical />
			<RowSoundActive />
			<RowRename defaultUsername={username} />
			<RowPassword />
			<RowLogout />
		</Fragment>
	)
}

const mapState = state => ({
	username: userSelectors.getUsername(state),
})
const mapDispatch = { getUser: userActions.getUser }
export default connect(mapState, mapDispatch)(SettingsApp)
