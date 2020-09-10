
export const incrementPointsUserDiscover = ({ id }) => {
	return word.post(`/users/${id}/poins/increment`)
}

export const incrementWordPoints = ({ id }) => {
	return word.post(`/words/${id}/points/increment`)
}
