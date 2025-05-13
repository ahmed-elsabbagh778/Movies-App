import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/config";
import LoadingSpinner from "../../components/LoadingSpinner";
import "./MovieDetails.css";
import { useLanguage } from "../../Context/languageContext";
import { Link } from "react-router-dom";


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const { language } = useLanguage();

useEffect(() => {
  axiosInstance
    .get(`/movie/${id}?api_key=${apiKey}&language=${language}`)
    .then((res) => setMovie(res.data))
    .catch((err) => console.log(err));

  axiosInstance
    .get(`/movie/${id}/recommendations?api_key=${apiKey}&language=${language}`)
    .then((res) => setRecommendations(res.data.results))
    .catch((err) => console.log(err));
}, [id, language]);


  if (!movie) return <LoadingSpinner />;
  return (
    <>
    <div className="movie-details container-fluid px-5">
       <div className="row align-items-center">
      <div className="col-md-4 poster-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="poster-img img-fluid"
          />
        </div>
        <div className="col-md-8 info-container">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-description">{movie.overview}</p>
          <div className="genres">
            {movie.genres.map((genre) => (
              <span className="genre-badge" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <div className="details">
            <p><strong>Duration:</strong> {movie.runtime} Min.</p>
            <p><strong>Languages:</strong> {movie.original_language}</p>
          </div>
        </div>
      </div>
      </div>
      {recommendations.length > 0 && (
  <div className="recommendations mt-5">
    <h3 className="text-white mb-4">Recommendations</h3>
    <div className="row">
      {recommendations.slice(0, 6).map((rec) => (
        <div key={rec.id} className="col-md-2 col-sm-4 mb-4">
          <div className="rec-movie-card">
           <Link to={`/movie/${rec.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w300${rec.poster_path}`}
              alt={rec.title}
              className="img-fluid rounded"
            /></Link>
            <p className="rec-title mt-2 text-center text-white">{rec.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>)}
</>
  );
};

export default MovieDetails;
