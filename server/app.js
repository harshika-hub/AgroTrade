import express from "express";
import cors from 'cors';
import connectDB from "./config/dbconfig.js";
import dotenv from 'dotenv';
import expresssession from 'express-session';
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";
import indexRouter from "./routes/indexRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(expresssession({secret:"sessionsecret",saveUninitialized:true,resave:true,cookie:{secure:false}}))
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());//problem


app.use('/',indexRouter)
app.use('/user',userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});