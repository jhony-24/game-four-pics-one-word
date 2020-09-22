import React from "react"
import RowSetting from "../RowSetting/RowSetting"
import { IoIosLogOut } from "react-icons/io"
import useAuthDispatchController from "src/hooks/useAuthManager/useAuthDispatchController"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const RowLogout = () => {
	const { onLogout } = useAuthDispatchController()
	const { translate } = useLanguage("game.settings.exit.row.")
	return (
		<RowSetting
			title={translate("0")}
			detail={translate("1")}
			bgIcon="#ab47bc"
			icon={<IoIosLogOut color="white" />}
			onClick={onLogout}
		/>
	)
}

export default RowLogout
