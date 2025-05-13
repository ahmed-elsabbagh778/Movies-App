import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/config";
import LoadingSpinner from "../../components/LoadingSpinner";
import "./MovieDetails.css";
import { useLanguage } from "../../Context/languageContext";
import MovieCard from "../../components/MovieCard/MovieCard";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const { language } = useLanguage();

useEffect(() => {
  window.scrollTo(0, 0);
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
  <div className="container-fluid px-5 mt-5">
    <h3 className="recommendations-title text-white mb-4">Recommendations</h3>
    <Carousel indicators={false} interval={null}>
      {recommendations.slice(0, 20).reduce((groups, rec, index) => {
        const groupIndex = Math.floor(index / 5);
        if (!groups[groupIndex]) groups[groupIndex] = [];
        groups[groupIndex].push(rec);
        return groups;
      }, []).map((group, idx) => (
        <Carousel.Item key={idx}>
          <div
            className="d-flex justify-content-center gap-4"
            style={{ flexWrap: "nowrap", overflowX: "auto" }}
          >
            {group.map((rec) => (
            <div key={rec.id} style={{ minWidth: "200px" }}>
              <MovieCard movie={rec} />
            </div>
          ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
)}
</>
  );
};

export default MovieDetails;
