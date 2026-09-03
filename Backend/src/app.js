import express from "express"
import cors from "cors"
import codeReviewRoutes from "./routes/codeReview.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app =  express();


//middlewares
const allowedOrigins = [
    "http://localhost:5173",
    "https://code-scribe-ashen.vercel.app",
    "https://code-scribe-g58z97704-vibe-7cbc.vercel.app"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));
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