import { useDispatch } from "react-redux"
import { userActions } from "src/redux/user"

const useAuthenticationWithSocial = () => {
	const dispatch = useDispatch()
	const loginWithGoogle = () => dispatch(userActions.signInGoogle())
	const loginWithFacebook = () => dispatch(userActions.signInFacebook())

	return {
		loginWithGoogle,
		loginWithFacebook,
	}
}

export default useAuthenticationWithSocial
