import { useDispatch } from 'react-redux';
import { userActions } from 'src/redux/user';

const useGenerateCodeToPassword = () => {
	const dispatch = useDispatch();
	const generateCodeVerification = () => dispatch(userActions.createCodeVerification());
	return {
		generateCodeVerification
	}
}

export default useGenerateCodeToPassword;