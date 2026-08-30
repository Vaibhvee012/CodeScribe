import Review from "../models/Review.model.js";

const reviewCode = async (userId, code, language, techType, description) => {

    console.log("SERVICE:", {userId,code,language,techType,description});


    console.log("Reviewing code:", { userId, code, language, techType, description});

    // Temporary mock review result
    const result = {
        score: 91,

        metrics: {
            performance: 88,
            security: 94,
            readability: 91
        },

        recommendedCode: {
            code: code,
            language: language,
            techType: techType,
            description: description
        },

        changes: [
            {
                type: "Performance",
                title: "Early input validation",
                text: "Validates input before performing unnecessary operations."
            },
            {
                type: "Security",
                title: "Safe error handling",
                text: "Handles unexpected input safely."
            },
            {
                type: "Readability",
                title: "Clearer structure",
                text: "Improves the structure and readability of the code."
            }
        ]
    };

    // Save review in MongoDB
    const review = await Review.create({
        user: userId,
        code,
        language,
        techType,
        description,
        score: result.score,
        metrics: result.metrics,
        recommendedCode: result.recommendedCode,
        changes: result.changes
    });

    return review;
};


const getReviewHistory = async (userId) => {

    const reviews = await Review.find({
        user: userId
    }).sort({
        createdAt: -1
    });

    return reviews;
};


export default {
    reviewCode,
    getReviewHistory
};