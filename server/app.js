import express from "express";
import cors from 'cors';
// import methodOverride from 'method-override';
import expresssession from 'express-session';
import connectDB from "./config/dbconfig.js";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";
import indexRouter from "./routes/indexRouter.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
// app.use(methodOverride("_method"));
app.use(express.json());
app.use(expresssession({secret:"sessionsecret",saveUninitialized:true,resave:true}))
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/uploads",express.static("uploads"))

app.use('',indexRouter)
app.use('/user',userRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
