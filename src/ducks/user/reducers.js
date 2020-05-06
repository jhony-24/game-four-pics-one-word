import Auth from "src/models/auth"
import { navigate } from "gatsby";
import { STATUS } from "./types";
import { handleActions } from "redux-actions";
import * as actions from "./actions"
import Indexed from "src/models/indexed";
import _ from "lodash";

const initialState = {
    user: null,
    logged: false,
    loading: false,
    updatedUser: false,
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
                let userDb = new Indexed();
                if (user.status) {
                    userDb.create({
                        key: "sound",
                        enableSound: true
                    });
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
    }),

    [actions.setUpdateUser]: (state, { payload }) => {
        let username = payload.username;
        return {
            ...state,
            user: {
                ...state.user,
                username
            }
        }
    }
}


export default handleActions(handlers, initialState);