export const getUsername = (state) => {
    const { user } = state.user;
    if (user) {
        return user.username;
    }
    return user;
}

export const getIdUser = (state) => {
    const user = state.user;
    if( user ) {
        return user.iduser;
    }
    return "";
}