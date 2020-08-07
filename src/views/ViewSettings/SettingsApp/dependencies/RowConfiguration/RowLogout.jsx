import React from "react"
import RowSetting from "../RowSetting/RowSetting"
import { IoIosLogOut } from "react-icons/io"

const RowLogout = () => {
	return (
		<RowSetting
			title="Exit game"
			detail="Finished the session in the game"
			bgIcon="#ab47bc"
			icon={<IoIosLogOut color="white" />}
			onClick={() => alert()}
		/>
	)
}

export default RowLogout
