import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/config";
import LoadingSpinner from "../../components/LoadingSpinner";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    axiosInstance
      .get(`/movie/${id}?api_key=${apiKey}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  /*useEffect(() => {
  axiosInstance
    .get(`/movie/${id}?api_key=${apiKey}`)
    .then((res) => {
      console.log("Movie data:", res.data); // 👈 Add this
      setMovie(res.data);
    })
    .catch((err) => console.log("Error fetching movie details:", err));
}, [id]);*/
  if (!movie) return <LoadingSpinner />;
  return (
    <div className="movie-details container mt-5">
      <h2>{movie.title}</h2>
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
  
};


export default MovieDetails;
