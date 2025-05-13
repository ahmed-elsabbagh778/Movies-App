import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/config";
import LoadingSpinner from "../../components/LoadingSpinner";
import "./TVshowsDetails.css";
import { useLanguage } from "../../Context/languageContext";
import TVShowsCard from "../../components/TVShowsCard/TVShowsCard";

const TVshowsDetails = () => {
  const { id } = useParams();
  const [tvShows, setTvShows] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const { language } = useLanguage();

useEffect(() => {
  axiosInstance
    .get(`/tv/${id}?api_key=${apiKey}&language=${language}`)
    .then((res) => setTvShows(res.data))
    .catch((err) => console.log(err));

  axiosInstance
    .get(`/tv/${id}/recommendations?api_key=${apiKey}&language=${language}`)
    .then((res) => setRecommendations(res.data.results))
    .catch((err) => console.log(err));
}, [id, language]);


  if (!tvShows) return <LoadingSpinner />;
  return (
    <>
    <div className="tvShows-details container-fluid px-5">
       <div className="row align-items-center">
      <div className="col-md-4 poster-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShows.poster_path}`}
            alt={tvShows.name}
            className="poster-img img-fluid"
          />
        </div>
        <div className="col-md-8 info-container">
        <h2 className="tvShows-name">{tvShows.name}</h2>
        <p className="tvShows-description">{tvShows.overview}</p>
          <div className="genres">
            {tvShows.genres.map((genre) => (
              <span className="genre-badge" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
          <p><strong>Release Date:</strong> {tvShows.first_air_date}</p>
          <p><strong>Rating:</strong> {tvShows.vote_average}</p>
          <div className="details">
            <p><strong>Duration:</strong> {tvShows.episode_run_time?.[0] || "N/A"} Min.</p>
            <p><strong>Languages:</strong> {tvShows.original_language}</p>
          </div>
        </div>
      </div>
      </div>
  {recommendations.length > 0 && (
  <div className="container-fluid px-5 mt-5">
    <h3 className="recommendations-name text-white mb-4">Recommendations</h3>
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
              <TVShowsCard tvShow={rec} />
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

export default TVshowsDetails;
