import supertest from 'supertest';
import app from '../src/server'; // Assuming your Express app instance is exported from 'app.ts'
import Movie from '../src/models/movieModel';

const request = supertest(app);

beforeEach(async () => {
    // Clear the Movie collection or perform setup
    await Movie.deleteMany({});
});

it('should create a new movie', async () => {
    const movieData = {
        title: 'Inception',
        genre: 'Sci-Fi',
        rating: 9.3,
        streamLink: 'https://example.com/inception',
        role: 'admin'
    };

    const response = await request.post('/movies/create').send(movieData);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Movie Save Successfully');
    expect(response.body.data.title).toBe('Inception');
});

it('should get all movies', async () => {
    const response = await request.get('/movies/getAll');

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual([]);
});

it('should get a movie by ID', async () => {
    const movie = new Movie({
        title: 'Interstellar',
        genre: 'Sci-Fi',
        rating: 9.2,
        streamLink: 'https://example.com/interstellar',
    });

    await movie.save();

    const response = await request.get(`/movies/${movie._id}`);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Interstellar');
});

it('should update a movie by ID', async () => {
    const movie = new Movie({
        title: 'The Matrix',
        genre: 'Action',
        rating: 8.7,
        streamLink: 'https://example.com/matrix',
    });

    await movie.save();

    const updatedData = {
        title: 'The Matrix Reloaded',
    };

    const response = await request.put(`/movies/update/${movie._id}`).send(updatedData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Movie updated successfully');
    expect(response.body.data.title).toBe('The Matrix Reloaded');
});

it('should delete a movie by ID', async () => {
    const movie = new Movie({
        title: 'Pulp Fiction',
        genre: 'Crime',
        rating: 8.9,
        streamLink: 'https://example.com/pulp-fiction',
    });

    await movie.save();

    const response = await request.delete(`/movies/delete/${movie._id}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Movie deleted successfully');
});
