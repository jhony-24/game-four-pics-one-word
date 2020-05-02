export const getUsername = (state) => {
    const { user } = state.user;
    if (user) {
        return JSON.parse(user).username;
    }
    return user;
}