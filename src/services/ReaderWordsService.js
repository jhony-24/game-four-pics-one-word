import mainService from "./coreServices/mainService"

export default function ReaderWordsService() {
	/**
	 * @param {Object} parameters
	 * @param {number} parameters.start
	 * @param {number} parameters.limit
	 */
	const getListAllWords = async parameters => {
		const { data } = await mainService.get("/words", { params: parameters })
		return data
	}

	return {
		getListAllWords,
	}
}
