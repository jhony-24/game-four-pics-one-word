export default function IncrementValueService() {
	/**
	 * @param {Object} parameters
	 * @param {string} parameters.id
	 */
	const incrementPointsUserDiscover = async parameters => {
		const { data } = word.post(`/users/${parameters.id}/poins/increment`)
		return data
	}

	/**
	 * @param {Object} parameters
	 * @param {string} parameters.id
	 */
	const incrementWordPoints = async parameters => {
		const { data } = word.post(`/words/${parameters.id}/points/increment`)
		return data
	}

	return {
		incrementPointsUserDiscover,
		incrementWordPoints,
	}
}
