import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';
import { Badge } from 'react-bootstrap';

function MovieCard(props) {
  const { movie } = props;

  return (
    <Card className='movie-card'>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <Badge className='movie-rate'>{movie.vote_average.toFixed(1)}</Badge>
      <Card.Body className='movie-card-body'>
        <Card.Title className='movie-card-title'>{movie.title}</Card.Title>
        <div>
          <Card.Text className='movie-card-date'>
          {movie.release_date}
        </Card.Text>
        
        </div>
        
      </Card.Body>
    </Card>
  );
};

export default MovieCard;