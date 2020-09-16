import Auth from "src/models/auth"

const useAuthDispatchController = () => {
	const onLogout = () => {
		Auth.destroy()
		window.location.replace("/");
	}

	return {
		onLogout,
	}
}

export default useAuthDispatchController
