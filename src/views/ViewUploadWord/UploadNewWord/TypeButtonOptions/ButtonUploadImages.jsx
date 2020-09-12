import React from "react"
import { IoIosAdd } from "react-icons/io"
import SButtonPrimaryCircular from "src/components/styled/buttons/SButtonPrimaryCircular"

const ButtonUploadImages = ({ onChange }) => (
	<SButtonPrimaryCircular $as="label" $style={{position:"static"}}>
		<IoIosAdd size={30} />
		<input
			type="file"
			accept="image/*"
			style={{ display: "none" }}
			multiple
			onChange={onChange}
		/>
	</SButtonPrimaryCircular>
)

export default ButtonUploadImages
