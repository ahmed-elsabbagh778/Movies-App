import Card from "react-bootstrap/Card";
import "./MovieCard.css";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function MovieCard(props) {
  const { movie } = props;

  return (
    <Card className="movie-card">
      <div className="image-container" onClick={() => alert('clicked')}>
        <Card.Img
          className="movie-card-img"
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <div className="overlay"></div>
        <div className="video-icon">
          <FontAwesomeIcon icon={faPlayCircle} />
        </div>
      </div>

      <Badge className="movie-rate">{movie.vote_average.toFixed(1)}</Badge>
      <Card.Body className="movie-card-body">
        <Card.Title className="movie-card-title">{movie.title}</Card.Title>
        <div>
          <Card.Text className="movie-card-date">
            {movie.release_date}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
