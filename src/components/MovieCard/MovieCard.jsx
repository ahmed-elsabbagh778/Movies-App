import Card from "react-bootstrap/Card";
import "./MovieCard.css";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addRemoveMovie } from "../../store/slices/watchList";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

function MovieCard(props) {
  const { movie } = props;

  const watchList = useSelector((state) => state.watchList.moviesWatchList);

  const isInWatchList = watchList.some((item) => item.id === movie.id);

  const dispatch = useDispatch();
  const handleWatchList = () => {
    dispatch(addRemoveMovie(movie));
  };

  return (
    <Card className="movie-card">
      <div className="image-container">
        {/* <Link to={`/movie/${movie.id}`} className="full-link"> */}
          <Card.Img
            className="movie-card-img"
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <div className="overlay"></div>

          <div className="video-icon">
            <FontAwesomeIcon icon={faEye} />
          </div>
        {/* </Link> */}
      </div>
      <Badge className="movie-rate">{movie.vote_average.toFixed(1)}</Badge>
      <Card.Body className="movie-card-body">
        <Card.Title className="movie-card-title">{movie.title}</Card.Title>
        <div>
          <Card.Text className="movie-card-date">
            {movie.release_date}
          </Card.Text>
        </div>

        <button
          className="fav-btn"
          onClick={handleWatchList}
          style={{ background: "none", border: "none" }}
        >
          <FontAwesomeIcon
            icon={isInWatchList ? solidHeart : regularHeart}
            style={{ color: isInWatchList ? "red" : "gray" }}
          />
        </button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
