import { createAction } from "redux-actions";
import { STATUS } from "./types";
import services from "src/resources/services"
import Auth from "src/models/auth";

// actions
const base = "ducks/user";
export const actionSignIn = createAction(`${base}/SIGN_IN`);
export const actionSignUp = createAction(`${base}/SIGN_UP`);
export const actionSignOut = createAction(`${base}/SIGN_OUT`);
export const actionCreateUser = createAction(`${base}/CREATE_USER`);
export const getUser = createAction(`${base}/GET_USER`);
export const setUpdateUser = createAction(`${base}/SET_UPDATE_USER`);

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

export const updateUser = ({ username }) => async dispatch => {
    const auth = Auth.get();
    const request = await services.updateUser({
        iduser: auth.iduser,
        username,
    });
    const newCookieData = null;
    if (request.status) {
        newCookieData = {
            ...auth,
            username
        }
        Auth.set(newCookieData);
        dispatch(setUpdateUser({ username }));
    }
}