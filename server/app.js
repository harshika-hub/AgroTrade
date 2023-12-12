import express from "express";
import cors from 'cors';
import connectDB from "./db/connectdb.js";
import cookieparser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieparser());
app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});