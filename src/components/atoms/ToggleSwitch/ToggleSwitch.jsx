import React from "react"
import { css } from "aphrodite/no-important"
import style, { SContainerToggleSwitch, SCheckButtonCircular } from "./ToggleSwitch.style"
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
			<input
				type="checkbox"
				id="input-switch"
				className={css(style.input)}
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
