import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";
import connectDB from "./config/Database.js"
import morgan from 'morgan';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const PORT = process.env.PORT

connectDB()

const corsOptions = {
    origin: ['http://localhost:3000', 'https://allindia.shop'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions))

    


mongoose.set('runValidators', true);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

