import express from "express"
import cors from "cors"
import codeReviewRoutes from "./routes/codeReview.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app =  express();


//middlewares
app.use(cors({
    origin: "http://localhost:5173",
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