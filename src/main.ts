import express from "express";

//env vars
import * as dotenv from "dotenv"
dotenv.config();

const app = express();
//middleware
import cors from "cors";
app.use(cors());
app.use(express.json());

//import routes
import messagesRoutes from "./routes/messages.routes.js";

//routes

app.use("/messages", messagesRoutes)

const start = async () => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log("you app is still working, congratulations");
    });
}

start();