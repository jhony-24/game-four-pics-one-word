import mainService from "./coreServices/mainService"
import uploaderService from "./coreServices/uploaderService"

export default function UploadNewWordService() {
	/**
	 * @param {Object} parameters
	 * @param {string[]} parameters.images
	 */
	const uploadImages = parameters => {
		const formData = new FormData()
		const appendImages = (form, nameParameter, allImages) => {
			for (let index in allImages) {
				form.append(`${nameParameter}[${index}]`, allImages[index])
			}
		}
		appendImages(formData, "images", parameters.images);
		return uploaderService.post("/upload", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})
	}

	/**
	 * @param {Object} parameters
	 */
	const uploadNewWord = async parameters => {
		const { data } = await mainService.post(`/words`, parameters)
		return data
	}

	return {
		uploadImages,
		uploadNewWord,
	}
}
