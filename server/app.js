import express from "express";
import cors from 'cors';
import connectDB from "./config/dbconfig.js";
import dotenv from 'dotenv';
import userRouter from "./routes/userRouter.js";
import indexRouter from "./routes/indexRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use('/',indexRouter)
app.use('/user',userRouter)
console.log(connectDB);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});