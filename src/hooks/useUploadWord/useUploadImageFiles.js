import { useReducer } from "react"

const useUploadImageFiles = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const previewImages = [...state.images].map(currentImage => {
		let image = window.URL.createObjectURL(currentImage);
		window.URL.revokeObjectURL(currentImage);
		return image;
	});


	const cancelUploadImages = () => dispatch({ type: TYPES.CANCEL_UPLOAD })
	const selectImages = params => dispatch({ type: TYPES.SELECT_IMAGES, images: params.target.files })

	return {
		cancelUploadImages,
		selectImages,
		previewImages,
		...state,
	}
}

const TYPES = {
	SELECT_IMAGES: "SELECT_IMAGES",
	CANCEL_UPLOAD: "CANCEL_UPLOAD",
}

const initialState = {
	images: [],
	uploaded: false,
}

const reducer = (state, action) => {
	switch (action.type) {
		case TYPES.SELECT_IMAGES:
			return {
				images: action.images,
				uploaded: true,
			}
		case TYPES.CANCEL_UPLOAD:
			return {
				...initialState,
			}
		default:
			return state;
	}
}

export default useUploadImageFiles
