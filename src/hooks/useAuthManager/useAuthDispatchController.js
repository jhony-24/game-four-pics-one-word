import Auth from "src/models/auth"
import { clientWindow } from "src/resources/tools/functions";

const useAuthDispatchController = () => {
	const onLogout = () => {
		Auth.destroy();
		clientWindow().location.replace("/");
	}

	return {
		onLogout,
	}
}

export default useAuthDispatchController
