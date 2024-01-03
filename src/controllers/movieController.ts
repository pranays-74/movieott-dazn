// src/controllers/movieController.ts
import { Request, Response } from 'express';
import Movie, { IMovie } from '../models/movieModel';
import { FilterQuery } from 'mongoose';

export const getAll = async (req: Request, res: Response) => {
    try {
        const { q } = req.query;

        const query: FilterQuery<IMovie> = {};

        if (q) {
            const regex = new RegExp(q as string, 'i');
            query.$or = [
                { title: regex },
                { genre: regex }
            ];
        }

        const movies = await Movie.find(query);
        res.json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const movieData: IMovie = req.body;
        const newMovie = new Movie(movieData);
        const savedMovie = await newMovie.save();

        res.status(201).json({
            message: "Movie created successfully",
            data: savedMovie
        });
    } catch (error) {
        console.error('Error creating movie:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const movie = await Movie.findById(id);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } catch (error) {
        console.error('Error fetching movie by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const updatedMovie = await Movie.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json({
            message: "Updated the movie successfully",
            data: updatedMovie
        });
    } catch (error) {
        console.error('Error updating movie by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const deletedMovie = await Movie.findByIdAndDelete(id);
        res.status(200).json({
            message: "Deleted the movie successfully",
            data: deletedMovie
        });
    } catch (error) {
        console.error('Error deleting movie by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
