import codeReviewApi from "../api/codeReview.api";

const reviewCode = async ({code,language,techType,description}) => {

    const reviewData = {code,language,techType,description};

    const result = await codeReviewApi.reviewCode(reviewData);

    return result;
};

export default {
    reviewCode
};