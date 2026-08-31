import authApi from "../api/auth.api.js";

const register = async ({
    username,
    email,
    password,
}) => {
    return await authApi.register({
        username,
        email,
        password,
    });
};

const login = async ({
    email,
    password,
}) => {
    const result = await authApi.login({
        email,
        password,
    });

    const token = result.data.token;

    localStorage.setItem("jwt_token", token);

    localStorage.setItem(
        "user",
        JSON.stringify(result.data.user)
    );

    return result;
};

const getCurrentUser = async () => {
    const token = localStorage.getItem("jwt_token");

    if (!token) {
        return null;
    }

    const result = await authApi.getMe(token);

    return result.data;
};

const logout = () => {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    getCurrentUser,
    logout,
};