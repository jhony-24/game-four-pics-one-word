import Auth from "src/models/auth"
import { navigate } from "gatsby";
import { STATUS } from "./types";
import { handleActions } from "redux-actions";
import * as actions from "./actions"

const initialState = {
    user: null,
    logged: false,
    loading: false
}

const handlers = {

    [actions.actionSignIn]: (state, { payload }) => {
        switch (payload.status) {
            case STATUS.LOADING:
                return {
                    ...state,
                    loading: !state.loading
                }
            case STATUS.OK:
                let user = payload.user;
                if (user.status) {
                    Auth.set(user);
                    navigate("/list")
                    return {
                        ...state,
                        user: user,
                        logged: true,
                        loading: false
                    }
                }
                return {
                    ...state,
                    loading: false
                }
            case STATUS.ERROR:
                return {
                    ...state,
                    loading: false
                }
            default:
                return state;
        }
    },

    [actions.actionCreateUser]: (state, action) => {
        return state;
    },

    [actions.getUser]: (state, action) => ({
        ...state,
        user: Auth.get()
    })
}


export default handleActions(handlers, initialState);