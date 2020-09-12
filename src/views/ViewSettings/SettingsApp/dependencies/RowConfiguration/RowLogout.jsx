import React from "react"
import RowSetting from "../RowSetting/RowSetting"
import { IoIosLogOut } from "react-icons/io"
import useAuthDispatchController from "src/hooks/useAuthManager/useAuthDispatchController"

const RowLogout = () => {
	const { onLogout } = useAuthDispatchController();
	return (
		<RowSetting
			title="Exit game"
			detail="Finished the session in the game"
			bgIcon="#ab47bc"
			icon={<IoIosLogOut color="white" />}
			onClick={onLogout}
		/>
	)
}

export default RowLogout
