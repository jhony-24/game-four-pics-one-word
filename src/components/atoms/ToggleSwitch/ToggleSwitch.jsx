import React from "react"
import { SContainerToggleSwitch, SCheckButtonCircular, SInputChecker } from "./ToggleSwitch.style"
import useToggle from "src/hooks/useToggle"
import PropTypes from "prop-types"

const ToggleSwitch = ({ checked, onChange }) => {
	const [state, setToggle] = useToggle(checked)
	const handlerChange = () => {
		setToggle()
		onChange(!state)
	}

	return (
		<SContainerToggleSwitch $active={state}>
			<SInputChecker
				type="checkbox"
				id="input-switch"
				checked={state}
				onChange={handlerChange}
			/>
			<SCheckButtonCircular $active={state}></SCheckButtonCircular>
		</SContainerToggleSwitch>
	)
}

ToggleSwitch.defaultProps = {
	checked: false,
	onChange: () => null,
}

ToggleSwitch.propTypes = {
	checked: PropTypes.bool,
	onChange: PropTypes.func,
}

export default ToggleSwitch
