import express from "express";
import dotenv from "dotenv";

import { ConnectDB } from "./config/db.config.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const PORT = process.env.PORT || 3000;


const app = express();
ConnectDB();

app.use("/api/v1/user", userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})