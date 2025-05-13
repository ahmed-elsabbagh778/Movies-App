# Movies App

This is a Movie and TV Show browsing application built with **React**. It allows users to browse movies and TV shows, view details, manage a watchlist (favorites), search by name, and switch between different languages. The project integrates with [The Movie Database API (TMDb)](https://www.themoviedb.org/) to fetch real-time data.

## Features

- View a list of **now playing movies**
- View **movie details** with:
  - Overview
  - Reviews
  - Recommended movies
- **Wishlist**:
  - Add/remove movies and TV shows
  - Wishlist counter in navbar
- **Pagination** support for movies list
- **Search** functionality
- **Language support**: English, Arabic, French, Chinese
  - If Arabic is selected → RTL layout
- **TV Shows** tab:
  - Popular TV shows
  - TV show details
  - Add/remove from wishlist
- **404 page** for unmatched routes

## Project Structure

- `components/` → Reusable UI components
- `pages/` → Page components (Movies, Details, Wishlist, Search Results, TV Shows)
- `redux/` → State management using Redux Toolkit
- `apis/` → Axios setup and API calls
- `App.js` → Routing and layout

## Technologies Used

- React
- React Router DOM
- Redux Toolkit
- Axios
- TMDb API
- Bootstrap CSS

## APIs Used

| Feature             | Endpoint                                                                 |
|---------------------|--------------------------------------------------------------------------|
| Now Playing Movies  | `https://api.themoviedb.org/3/movie/now_playing`                         |
| Movie Details       | `https://api.themoviedb.org/3/movie/{id}`                                |
| Recommendations     | `https://api.themoviedb.org/3/movie/{movie_id}/recommendations`          |
| Reviews             | `https://api.themoviedb.org/3/movie/{movie_id}/reviews`                  |
| Search Movies       | `https://api.themoviedb.org/3/search/movie?query={MovieName}`            |
| Popular TV Shows    | `https://api.themoviedb.org/3/tv/popular`                                |
| TV Show Details     | `https://api.themoviedb.org/3/tv/{series_id}`                            |

> Use `https://image.tmdb.org/t/p/w500/${poster_path}` to render posters.

## Language Support

Supported languages:
- English (`en`)
- Arabic (`ar`) → Right-to-left layout
- French (`fr`)
- Chinese (`zh`)

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Add your TMDb API key in a .env file:
    ```bash
    VITE_APP_API_KEY=your_api_key_here
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```

## Authors
Developed by **Ahmed Elsabbagh**, **Othman Ahmed**, **Asmaa Tarek**, **Galal Owais**, **Ahmed Hani** and **Ahmed Ebrahim**.

## License
This project is licensed under the **MIT License**.