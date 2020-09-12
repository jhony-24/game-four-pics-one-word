import { createSelector } from "reselect"

export const getUsername = createSelector( state => state.user, user => (user ? user.user?.username : ""))
export const getUserId = createSelector( state => state.user, user => (user ? user.user?.iduser : "") )
