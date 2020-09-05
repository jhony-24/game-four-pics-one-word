import React, { forwardRef } from "react"
import Flex from "src/components/dom/Flex"
import PropTypes from "prop-types"
import STextField from "./TextField.style"

const TextField = forwardRef((props, ref) => {
	const { styles, icon, value, onChange, coloricon, ...restProps } = props;
	return (
		<Flex styles={[STextField.Flex, styles]}>
			{icon && <STextField.Label $color={coloricon}>{icon}</STextField.Label>}
			<STextField.Input
				{...restProps}
				$ref={ref}
				defaultValue={value}
				onKeyUp={onChange}
				$color={coloricon}
				spellCheck={false}
			/>
		</Flex>
	)
})

TextField.defaultProps = {
	value: "",
	type: "text",
	onChange: () => null,
}

TextField.propTypes = {
	icon: PropTypes.element,
	type: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	colortext: PropTypes.string,
	coloricon: PropTypes.string,
	name: PropTypes.string,
}

export default TextField;