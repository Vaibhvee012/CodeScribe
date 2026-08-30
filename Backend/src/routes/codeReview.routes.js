import { Router } from "express";
import { reviewCode, getReviewHistory } from "../controllers/codeReview.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const coderouter = Router();


coderouter.post("/code-review", authMiddleware, reviewCode);
coderouter.get("/code-review/history", authMiddleware, getReviewHistory);

export default coderouter;