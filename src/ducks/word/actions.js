import { createAction } from "redux-actions";
import services from "src/resources/services"



// ACTIONS
const base = "ducks/word";
export const actionGetListAllWords = createAction(`${base}/GET_LIST_ALL_WORDS`);
export const errorToGetData = createAction(`${base}/ERROR_TO_GET_DATA`);
export const actionUploadWordImages = createAction(`${base}/UPLOAD_IMAGES`);
export const actionUploadNewWord = createAction(`${base}/UPLOAD_NEW_WORD`);



// ACTIONS CREATORS
export const getListAllWords = () => async (dispatch) => {
    try {
        const request = await services.getListAllWords();
        dispatch(actionGetListAllWords({
            listWords: request.data
        }));
    }
    catch {
        dispatch(errorToGetData({error:true}));
    }
}


export const uploadImages = (images) => async (dispatch) => {
    try {
        await services.uploadImages({ images });
        dispatch(actionUploadWordImages());
    }
    catch(error) {
        console.log(error)
    }
}


export const uploadNewWord = (dataUpload) => async dispatch => {
    const { letters, images } = dataUpload;
    const data = {
        idWord: '',
        letters,
        images,
    }
    try {
        await services.uploadNewWord(data);
        dispatch(actionUploadNewWord({ uploaded: true }));
    }
    catch {

    }
}