import express, { Application } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import movieRoutes from './routes/movieRoutes';

const app: Application = express();
const PORT: number = 3000 || process.env.PORT;

const mongoURI = process.env.MONGO_URI;

mongoose.connect(`${mongoURI}`, {
});

app.use(express.json());

// Use movie routes
app.use('/movies', movieRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
