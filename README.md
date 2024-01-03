# Movie API

This project is a simple Movie API built with TypeScript, Express, and MongoDB.

## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-api.git


cd movieott-dazn
npm install

Update in .env by creating new env file outside src and below lines 
MONGO_URI=mongodb://localhost:27017/movie-ott
PORT=3000
## Runinng
npm start

API Endpoints
GET /movies: List all movies in the lobby
GET /movies?q=query: Search for a movie by title or genre
POST /movies: Add a new movie to the lobby (requires "admin" role)
PUT /movies/:id: Update an existing movie's information (requires "admin" role)
DELETE /movies/:id: Delete a movie from the lobby (requires "admin" role)

