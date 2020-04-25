import { createAction } from "redux-actions";
import services from "src/resources/services"
import Auth from "src/models/auth";

// actions
const base = "ducks/word";
export const actionGetListAllWords = createAction(`${base}/GET_LIST_ALL_WORDS`);
export const actionLoadingListAllWords = createAction(`${base}/LOADING_LIST_ALL_WORDS`);
export const actionErrorToGetData = createAction(`${base}/ERROR_TO_GET_DATA`);
export const actionUploadNewWord = createAction(`${base}/UPLOAD_NEW_WORD`);
export const actionLoadingUploadNewWord = createAction(`${base}/LOADING_UPLOAD_NEW_WORD`);


// actions creators
export const getListAllWords = () => async (dispatch) => {
    dispatch(actionLoadingListAllWords({ loading: true, error: false }));
    try {
        const request = await services.getListAllWords();
        dispatch(actionGetListAllWords({
            listWords: request.data,
            loading: false,
            error: false
        }));
    }
    catch {
        dispatch(actionErrorToGetData({ error: true, loading: false }));
    }
}


export const uploadNewWord = (dataUpload) => async dispatch => {
    const { letters, images } = dataUpload;
    const { uploadImages, uploadNewWord } = services;
    const user = JSON.parse(Auth.get());
    dispatch(actionLoadingUploadNewWord({ loadingUpload: true }));
    try {
        const request = await uploadImages({ images }).then(({ data: images }) => {
            let wordUploadd = uploadNewWord({
                iduser: user.iduser,
                letters,
                images,
                points: 0,
                dateCreated : (new Date()).toLocaleString(),
            })
            return wordUploadd;
        });
        dispatch(actionUploadNewWord({ loadingUpload: false, uploaded: request.status }));
    }
    catch {
        dispatch(actionLoadingUploadNewWord({ loadingUpload: false }));
    }
}

