import { useState } from "react";

import codeReviewService from "../services/codeReview.service";

const useCodeReview = () => {

    // Code review form state

    const [code, setCode] = useState("");

    const [language, setLanguage] = useState("JavaScript");

    const [techType, setTechType] = useState("React");

    const [description, setDescription] = useState("");


    // Review state

    const [loading, setLoading] = useState(false);

    const [reviewResult, setReviewResult] = useState(null);

    const [error, setError] = useState("");


    // Review handler

    const handleReview = async () => {

        setError("");

        // Validation

        if (!code.trim()) {
            setError("Please enter your code.");
            return;
        }

        if (!language) {
            setError("Please select a language.");
            return;
        }

        if (!techType) {
            setError("Please select a technology.");
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

        } catch (err) {

            setError("Something went wrong while reviewing the code.");

        } finally {

            setLoading(false);

        }

    };


    return {

        // Form state

        code,
        setCode,

        language,
        setLanguage,

        techType,
        setTechType,

        description,
        setDescription,


        // Review state

        loading,
        reviewResult,
        error,


        // Actions

        handleReview,

    };

};

export default useCodeReview;