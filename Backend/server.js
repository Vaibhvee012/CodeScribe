import "dotenv/config";

console.log(
    "JWT SECRET LOADED:",
    process.env.JWT_SECRET ? "YES" : "NO"
);

import app from "./src/app.js";
import connectDB from "./src/config/database.js";

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
