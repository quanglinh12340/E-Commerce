import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import cookieParser from 'cookie-parser';

import { RootRouter } from './src/routes/index.js';

dotenv.config()


const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json({ limit: '1mb' }))
app.use(cookieParser())

app.use('/api', RootRouter)

const PORT = 8080 || process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Connected to DB');
        console.log(`Server is running at http://localhost:${PORT}`);
    })
})

