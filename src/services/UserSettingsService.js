import mainService from "./coreServices/mainService"

export default function UserSettingsService() {
	/**
	 * @param {Object} parameters
	 * @param {string} parameters.iduser
	 */
	const updateUser = async (parameters) => {
		const { iduser, ...rest } = parameters
		const { data } = await mainService.put(`/users/${iduser}`, rest);
		return data;
	}

	return {
		updateUser,
	}
}
