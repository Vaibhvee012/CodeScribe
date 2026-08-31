import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/auth";

const register = async (userData) => {
    const response = await axios.post(
        `${API_BASE_URL}/register`,
        userData
    );

    return response.data;
};

const login = async (credentials) => {
    const response = await axios.post(
        `${API_BASE_URL}/login`,
        credentials
    );

    return response.data;
};

const getMe = async (token) => {
    const response = await axios.get(
        `${API_BASE_URL}/me`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

export default {
    register,
    login,
    getMe,
};