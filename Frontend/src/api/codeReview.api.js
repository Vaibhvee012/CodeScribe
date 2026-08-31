import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

const getAuthConfig = () => {
    const token = localStorage.getItem("jwt_token");

    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

const reviewCode = async (reviewData) => {
    const response = await axios.post(
        `${API_BASE_URL}/code-review`,
        reviewData,
        getAuthConfig()
    );

    return response.data.data;
};

const getReviewHistory = async () => {
    const response = await axios.get(
        `${API_BASE_URL}/code-review/history`,
        getAuthConfig()
    );

    return response.data.data;
};

export default {
    reviewCode,
    getReviewHistory,
};