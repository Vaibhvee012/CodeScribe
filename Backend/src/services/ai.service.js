import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const reviewCodeWithAI = async ({
    code,
    language,
    techType,
    description,
}) => {
    const prompt = `
You are CodeScribe, an expert AI code reviewer.

Review the following code carefully.

Language: ${language}
Technology/Framework: ${techType}
Description: ${description || "No description provided"}

CODE:
\`\`\`
${code}
\`\`\`

Analyze the code for:
1. Performance
2. Security
3. Readability
4. Overall quality

Give practical and specific recommendations.

For recommendedCode:
- Return an improved version of the submitted code.
- Keep the same general purpose.
- Do not invent unrelated functionality.
- Preserve clear line breaks and indentation.
- Do NOT minify, compress, or place the entire code on one line.
- Use conventional formatting for the specified language and framework.
- Make the result directly readable and copy-pasteable by a developer.
- Preserve meaningful comments when useful.
Be practical and specific.
Do not make unnecessary changes just for style.
Only recommend changes that are relevant to the submitted code.
Do not claim a security issue unless there is a reasonable security implication.
Return valid structured JSON only.

Scoring rules:
- score must be an integer from 0 to 100.
- performance must be an integer from 0 to 100.
- security must be an integer from 0 to 100.
- readability must be an integer from 0 to 100.
- Base scores on the actual submitted code.

For changes:
- Give the most important improvements.
- Explain why each improvement matters.

Return ONLY the requested JSON structure.
`;

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,

        config: {
            responseMimeType: "application/json",

            responseSchema: {
                type: "object",
                properties: {
                    score: {
                        type: "integer",
                    },

                    metrics: {
                        type: "object",
                        properties: {
                            performance: {
                                type: "integer",
                            },
                            security: {
                                type: "integer",
                            },
                            readability: {
                                type: "integer",
                            },
                        },
                        required: [
                            "performance",
                            "security",
                            "readability",
                        ],
                    },

                    recommendedCode: {
                        type: "object",
                        properties: {
                            code: {
                                type: "string",
                            },
                            language: {
                                type: "string",
                            },
                            techType: {
                                type: "string",
                            },
                            description: {
                                type: "string",
                            },
                        },
                        required: [
                            "code",
                            "language",
                            "techType",
                            "description",
                        ],
                    },

                    changes: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                type: {
                                    type: "string",
                                },
                                title: {
                                    type: "string",
                                },
                                text: {
                                    type: "string",
                                },
                            },
                            required: [
                                "type",
                                "title",
                                "text",
                            ],
                        },
                    },
                },

                required: [
                    "score",
                    "metrics",
                    "recommendedCode",
                    "changes",
                ],
            },
        },
    });

    return JSON.parse(response.text);
};

export default {
    reviewCodeWithAI,
};