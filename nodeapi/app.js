import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/UserRoute.js";
import taskRoute from "./routes/task.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import { config } from "dotenv";
import cors from "cors";
const app = express();
config({
  path: "./config.env",
});

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(userRoute);
app.use(taskRoute);
//using error middleware
app.use(errorMiddleware);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db."))
  .catch((e) => console.log("Error:", e));

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running at port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
