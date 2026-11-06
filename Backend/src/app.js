import express from "express"
import cors from "cors"
import codeReviewRoutes from "./routes/codeReview.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app =  express();


//middlewares
const allowedOrigins = [
    "http://localhost:5173",
    "https://code-scribe-ashen.vercel.app"
];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    })
);

app.use(express.json());

app.use("/api", codeReviewRoutes);
app.use("/api/auth", authRoutes);



app.get("/api/health", (req,res)=>{
    res.status(200).json({
        success: true,
        message:"CodeScribe API is running",
    })
})

export default app;