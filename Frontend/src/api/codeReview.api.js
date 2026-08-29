import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

const reviewCode = async (reviewData) => {
    const response = await axios.post(
        `${API_BASE_URL}/code-review`,
        reviewData
    );

    return response.data;
};

export default {
    reviewCode,
};