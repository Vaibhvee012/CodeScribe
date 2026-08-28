const reviewCode = async ({
    code,
    language,
    techType,
    description
}) => {

    // Temporary mock delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Temporary mock AI response
    return {
        score: 91,

        metrics: {
            performance: 88,
            security: 94,
            readability: 91,
        },

        recommendedCode: `function getUserProfile(id) {
    if (!id) return null;

    const user = db.users.find(id);

    if (!user) return null;

    return {
        name: user.profile?.name ?? "Unknown",
        email: user.email,
    };
}`,

        changes: [
            {
                type: "Performance",
                title: "Early input validation",
                text: "Returns before making a database query when the id is empty, avoiding unnecessary work.",
            },

            {
                type: "Security",
                title: "Safe missing-user handling",
                text: "Guards against undefined records so an unexpected id cannot cause a runtime exception.",
            },

            {
                type: "Readability",
                title: "Clearer fallback values",
                text: "Uses optional chaining and a friendly fallback to make the response predictable.",
            },
        ],
    };
};

export default {
    reviewCode,
};