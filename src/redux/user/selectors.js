export const getUsername = (state) => {
    const { user } = state.user;
    if (user) {
        return user.username;
    }
    return user;
}