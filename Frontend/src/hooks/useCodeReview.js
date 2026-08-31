import { useState } from "react";
import codeReviewService from "../services/codeReview.service.js";

const useCodeReview = () => {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("JavaScript");
    const [techType, setTechType] = useState("React");
    const [description, setDescription] = useState("");

    const [reviewResult, setReviewResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleReview = async () => {
        setError("");

        if (!code.trim()) {
            setError("Please enter some code to review.");
            return;
        }

        try {
            setLoading(true);

            const result = await codeReviewService.reviewCode({
                code,
                language,
                techType,
                description,
            });

            setReviewResult(result);
        } catch (error) {
    console.error("Review failed:", error);

    if (error.response?.status === 401) {
        setError("Your session has expired. Please log in again.");
    } else if (error.response?.status === 429) {
        setError("AI review limit reached. Please try again later.");
    } else if (error.response?.status === 503) {
        setError(
            "The AI service is temporarily busy. Please try again in a moment."
        );
    } else if (error.response?.status >= 500) {
        setError(
            "The AI review service is temporarily unavailable."
        );
    } else {
        setError("Unable to review the code. Please try again.");
    }

        } finally {
            setLoading(false);
        }
    };

    return {
        code,
        setCode,

        language,
        setLanguage,

        techType,
        setTechType,

        description,
        setDescription,

        loading,
        reviewResult,
        error,

        handleReview,
    };
};

export default useCodeReview;
