import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import dbConnection from "./server.js";
import AuthRoute from "./Routes/AuthRoute.js";
import userRoute from "./Routes/userRoute.js";
import PostRoute from "./Routes/PostRoute.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
dbConnection();
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
app.use("/auth", AuthRoute);
app.use("/user", userRoute);
app.use("/post",PostRoute)
export default app;
