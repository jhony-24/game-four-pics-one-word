import { createAction } from "redux-actions";
import { STATUS } from "./types";
import services from "src/resources/services"

// actions
const base = "ducks/user";
export const actionSignIn = createAction(`${base}/SIGN_IN`);
export const actionSignUp = createAction(`${base}/SIGN_UP`);
export const actionSignOut = createAction(`${base}/SIGN_OUT`);
export const actionCreateUser = createAction(`${base}/CREATE_USER`);

export const getUser = createAction(`${base}/GET_USER`);

// actions creator
export const signIn = ({ username, pass }) => async dispatch => {
    dispatch(actionSignIn({
        status: STATUS.LOADING
    }));
    try {
        const request = await services.signIn({ username, pass });
        dispatch(actionSignIn({
            user: request.data,
            status: STATUS.OK
        }));
    }
    catch {
        dispatch(actionSignIn({
            status: STATUS.ERROR
        }));
    }
}

export const createUser = ({ username, pass }) => async dispatch => {
    await services.createUser({ username, pass });
    dispatch(actionCreateUser());
}

export const updateUser = (parametersUsername) => async dispatch => {
    await services.updateUser(parametersUsername);
}