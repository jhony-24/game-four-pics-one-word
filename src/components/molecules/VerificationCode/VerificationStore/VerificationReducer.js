import _ from "lodash"
import * as TYPES from "./VerificationActions"

export const VerificationCheckInitialState = {
	inputs: [],
	isComplete: false,
	checkValue : ""
}

export default function VerificationReducer(state, action){
	switch (action.type) {
		case TYPES.SET_INITIAL_LETTERS:
			const checkValue = action.payload;
			return {
				...state,
				inputs : _.map(_.split(checkValue,""),(_,index)=> ({
					isEnabled: !index,
					name: index,
					value: ""
				})),
				checkValue
			}

		case TYPES.SET_LETTER:
			const { name, value } = action.payload;
			return {
				...state,
				inputs : _.map(state.inputs,(current,index) => ({
					...current,
					...( name === index ) && {value},
					...( ( name + 1) === index ) && { isEnabled: true } 
				}))
			}
		
		case TYPES.CHECK_VALUE_IS_CORRECT:
			const isComplete = state.checkValue === _.map(state.inputs,(current)=>current.value).join("");
			return {
				...state,
				isComplete
			};

		case TYPES.SET_NOT_ENABLED:
			const { keyName } = action.payload;
			return _.set(state, `inputs[${keyName}].isEnabled`, false);
		
		case TYPES.RESET_CHECK_LETTER:
			return VerificationCheckInitialState;
			
		default:
			return state
	}
}
