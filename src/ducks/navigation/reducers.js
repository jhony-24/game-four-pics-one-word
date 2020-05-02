import { handleActions } from "redux-actions";
import * as actions from "./actions";
import * as operations from "./operations";

const initialState = {
    useSound: true
}

const handlers = {
    [actions.activeSound]: (state) => {
        return {
            ...state,
            useSound: true
        }
    },
    [actions.deactiveSound]: (state) => {
        return {
            ...state,
            useSound: false
        }
    }
}

export default handleActions(handlers, initialState);