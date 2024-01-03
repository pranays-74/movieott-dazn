// src/models/movieModel.ts
import { Document, Schema, model } from 'mongoose';

export interface IMovie extends Document {
    title: string;
    genre: string;
    rating: number;
    streamLink: string;
}

const movieSchema = new Schema({
    title: String,
    genre: String,
    rating: Number,
    streamLink: String,
});

const Movie = model<IMovie>('Movie', movieSchema);

export default Movie;
