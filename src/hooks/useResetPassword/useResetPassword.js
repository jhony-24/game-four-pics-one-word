import { useDispatch } from "react-redux"
import { userActions } from "src/redux/user"

const useResetPassword = () => {
	const dispatch = useDispatch()
	const resetPassword = () => dispatch(userActions.resetPassword())
	return {
		resetPassword,
	}
}

export default useResetPassword
