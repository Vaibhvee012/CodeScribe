import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

const reviewCode = async (reviewData) => {
    const token = localStorage.getItem("jwt_token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    console.log("TOKEN:", token);
    console.log("AXIOS CONFIG:", config);

    const response = await axios.post(
        `${API_BASE_URL}/code-review`,
        reviewData,
        config
    );

    return response.data.data;
};

export default {
    reviewCode,
};