import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = {
    enableSound: true
}

const handlers = {
    [actions.enableSound]: (state) => {
        return {
            ...state,
            enableSound: !state.enableSound
        }
    }
}

export default handleActions(handlers, initialState);