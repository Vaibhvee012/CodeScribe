import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        code: {
            type: String,
            required: true,
        },

        language: {
            type: String,
            required: true,
        },

        techType: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            default: "",
        },

        score: {
            type: Number,
            required: true,
        },

        metrics: {
            performance: {
                type: Number,
                required: true,
            },

            security: {
                type: Number,
                required: true,
            },

            readability: {
                type: Number,
                required: true,
            },
        },

        recommendedCode: {
            code: {
                type: String,
                required: true,
            },

            language: {
                type: String,
                required: true,
            },

            techType: {
                type: String,
                required: true,
            },

            description: {
                type: String,
                default: "",
            },
        },

        changes: [
            {
                type: {
                    type: String,
                    required: true,
                },

                title: {
                    type: String,
                    required: true,
                },

                text: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;