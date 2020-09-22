import React, { Fragment, useEffect } from "react"
import RowSoundActive from "./RowConfiguration/RowSoundActive"
import RowRename from "./RowConfiguration/RowRename"
import { connect } from "react-redux"
import { userActions } from "src/redux/user"
import RowPassword from "./RowConfiguration/RowPassword"
import RowLogout from "./RowConfiguration/RowLogout"
import SettingUserInformation from "./SettingsUserInformation/SettingUserInformation"

const SettingsApp = ({ getUser }) => {
	useEffect(() => {
		getUser()
	}, [getUser])

	return (
		<Fragment>
			<SettingUserInformation />
			<RowSoundActive />
			<RowRename />
			<RowPassword />
			<RowLogout />
		</Fragment>
	)
}

const mapDispatch = { getUser: userActions.getUser }
export default connect(null, mapDispatch)(SettingsApp)
