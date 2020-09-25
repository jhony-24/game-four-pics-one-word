import { useDispatch } from 'react-redux';
import { userActions } from 'src/redux/user';

const useGenerateCodeToPassword = () => {
	const dispatch = useDispatch();
	const createCodeVerification = () => dispatch(userActions.createCodeVerification());
	return {
		createCodeVerification
	}
}

export default useGenerateCodeToPassword;