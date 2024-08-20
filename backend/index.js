import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import cookieParser from 'cookie-parser';

import { RootRouter } from './src/routes/index.js';

dotenv.config()

connectDB()

const app = express()
const PORT = 8080 || process.env.PORT

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json({ limit: '1mb' }))
app.use(cookieParser())

app.use('/api', RootRouter)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);

})