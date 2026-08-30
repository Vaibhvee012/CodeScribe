import codeReviewService from "../services/codeReview.service.js";

export const reviewCode = async (req, res) => {
    try {
        const { code, language, techType, description } = req.body;
        const userId = req.user.userId;

        console.log("CONTROLLER:", {userId,code,language,techType,description});


        const result = await codeReviewService.reviewCode(
            userId,
            code,
            language,
            techType,
            description
        );

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error("Code review error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to review code"
        });
    }
};

export const getReviewHistory = async (req, res) => {
    try {

        const userId = req.user.userId;

        const reviews = await codeReviewService.getReviewHistory(userId);

        res.status(200).json({
            success: true,
            data: reviews
        });

    } catch (error) {

        console.error("Review history error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch review history"
        });
    }
};