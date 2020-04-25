import Auth from "src/models/auth"
import { navigate } from "gatsby";
import { STATUS } from "./types";


export const operationSignIn = (state, { payload }) => {
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
    }
}

export const operationsCreateUser = (state,{payload}) => {
    return state;
}