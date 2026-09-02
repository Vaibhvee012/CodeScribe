import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api/auth`;

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

const updateProfile = async (profileData) => {
    const token = localStorage.getItem("jwt_token");

    const response = await axios.patch(
        `${API_BASE_URL}/profile`,
        profileData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data.data;
};

export default {
    register,
    login,
    getMe,
    updateProfile,
};
