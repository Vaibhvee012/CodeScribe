import Review from "../models/Review.model.js";
import aiService from "./ai.service.js";

const reviewCode = async (
    userId,
    code,
    language,
    techType,
    description
) => {
    // Get AI review from Gemini
    const result = await aiService.reviewCodeWithAI({
        code,
        language,
        techType,
        description,
    });

    // Save AI review in MongoDB
    const review = await Review.create({
        user: userId,
        code,
        language,
        techType,
        description,
        score: result.score,
        metrics: result.metrics,
        recommendedCode: result.recommendedCode,
        changes: result.changes,
    });

    return review;
};

const getReviewHistory = async (userId) => {
    const reviews = await Review.find({
        user: userId,
    }).sort({
        createdAt: -1,
    });

    return reviews;
};

export default {
    reviewCode,
    getReviewHistory,
};