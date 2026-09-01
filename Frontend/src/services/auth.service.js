import authApi from "../api/auth.api.js";

const register = async (userData) => {
    return await authApi.register(userData);
};

const login = async (credentials) => {
    const result = await authApi.login(credentials);

    if (result?.data?.token) {
        localStorage.setItem("jwt_token", result.data.token);

        if (result.data.user) {
            localStorage.setItem(
                "user",
                JSON.stringify(result.data.user)
            );
        }
    }

    return result;
};

const getMe = async (token) => {
    return await authApi.getMe(token);
};

const updateProfile = async ({ username, about }) => {
    return await authApi.updateProfile({
        username,
        about,
    });
};

export default {
    register,
    login,
    getMe,
    updateProfile,
};
