import { useSelector } from "react-redux"
import { userSelectors } from "src/redux/user"

const useCodeVerificationPassword = () => {
	const { codeVerification, isVerified, isCreated } = useSelector(userSelectors.forgotPassword)
	return {
		codeVerification,
		isVerified,
		isCreated
	}
}

export default useCodeVerificationPassword
