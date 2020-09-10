import mainService from "./coreServices/mainService"

export default function UserCheckAuthService() {
	/**
	 * @param {Object} parameters
	 * @param {string} parameters.username
	 * @param {string} parameters.pass
	 */
	const signIn = async parameters => {
		const { data } = await mainService.post(`/users/exists`, parameters)
		return data
	}

	/**
	 * @param {Object} parameters
	 * @param {string} parameters.username
	 * @param {string} parameters.pass
	 */
  const signUp = async parameters => {
		const { data } = await mainService.post(`/users`, parameters)
		return data
	}

	return {
		signIn,
		signUp,
	}
}
