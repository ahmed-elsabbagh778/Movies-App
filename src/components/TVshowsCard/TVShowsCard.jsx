import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./TVShowsCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addRemoveShow } from "../../store/slices/watchList";

function TVShowsCard({ tvShow }) {
  const watchList = useSelector((state) => state.watchList.showsWatchList);
  const dispatch = useDispatch();
  const isInWatchList = watchList.some((item) => item.id === tvShow?.id);

  if (!tvShow || !tvShow.poster_path) return null;

  const handleWatchList = () => {
    dispatch(addRemoveShow(tvShow));
  };

  return (
    <Card className="tvShow-card">
      <div className="image-container">
        <Link to={`/tv/${tvShow.id}`} className="full-link">
          <Card.Img
            className="tvShow-card-img"
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
            alt={tvShow.name}
          />
          <div className="overlay"></div>
          <div className="video-icon">
            <FontAwesomeIcon icon={faEye} />
          </div>
        </Link>
      </div>

      <Badge className="tvShow-rate">{tvShow.vote_average?.toFixed(1)}</Badge>

      <Card.Body className="tvShow-card-body">
        <Card.Title className="tvShow-card-title">{tvShow.name}</Card.Title>
        <Card.Text className="tvShow-card-date">
          {tvShow.first_air_date}
        </Card.Text>

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

export default TVShowsCard;