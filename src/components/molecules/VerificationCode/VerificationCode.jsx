import React, { useEffect, useReducer } from "react"
import { checkValueIsCorrect, setInitialLetters, setLetter } from "./VerificationStore/VerificationActions"
import { SVerificationInputContainer } from "./VerificationCode.style"
import VerificationCodeInputOneValue from "./VerificationCodeComponents/VerificationCodeInputOneValue"
import SWrapperCentered from "src/components/styled/wrappers/SWrapperCentered"
import VerificationReducer, { VerificationCheckInitialState } from "./VerificationStore/VerificationReducer"

const VerificationCode = ({ checkValue, onCompleteSuccess }) => {
	const [state, dispatch] = useReducer(VerificationReducer, VerificationCheckInitialState)
	const onChangeInput = event => {
		const [name, value] = [Number(event.target.name), event.target.value]
		if (value.trim() !== "" && value.length === 1) {
			dispatch(setLetter({ value, name }))
			dispatch(checkValueIsCorrect())
		}
	}

	useEffect(() => {
		if(checkValue){
			dispatch(setInitialLetters(checkValue));
		}
	},[checkValue]);

	useEffect(() => {
		if(state.isComplete) {
			onCompleteSuccess({isComplete:state.isComplete,checkValue:state.checkValue})
		}
	},[state,onCompleteSuccess]);

	return (
		<SWrapperCentered>
			<SVerificationInputContainer $repeat={state.inputs.length}>
					{state.inputs.map((current,index) => (
						<VerificationCodeInputOneValue 
						key={index} 
						name={index}
						isEnabled={current.isEnabled}
						onKeyUp={onChangeInput}
						$complete={state.isComplete}
						/>
					))}
			</SVerificationInputContainer>
		</SWrapperCentered>
	)
}

VerificationCode.defaultProps = {
	onCompleteSuccess : () => null	
}
export default VerificationCode;
