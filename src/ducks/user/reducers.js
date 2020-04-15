import { handleActions } from "redux-actions";
import * as actions from "./actions"
import * as operations from "./operations";


const initialState = {
    user: null,
    logged: false,
    loading: false
}


const handlers = {

    [actions.actionSignIn]: (state, action) =>
        operations.operationSignIn(state, action),
}


export default handleActions(handlers, initialState);