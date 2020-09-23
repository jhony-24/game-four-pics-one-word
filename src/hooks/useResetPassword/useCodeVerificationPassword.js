import { useSelector } from "react-redux"
import { userSelectors } from "src/redux/user"

const useCodeVerificationPassword = () => {
	const { codeVerification, isVerified } = useSelector(userSelectors.forgotPassword)
	return {
		codeVerification,
		isVerified,
	}
}

export default useCodeVerificationPassword
