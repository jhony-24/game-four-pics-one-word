import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = {
    enableSound: true
}

const handlers = {
    [actions.activeSound]: (state) => {
        return {
            ...state,
            enableSound: true
        }
    },
    [actions.deactiveSound]: (state) => {
        return {
            ...state,
            enableSound: false
        }
    }
}

export default handleActions(handlers, initialState);