import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/UserRoute.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 4000;

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(userRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/backendAPI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db."))
  .catch((e) => console.log("Error:", e));

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
