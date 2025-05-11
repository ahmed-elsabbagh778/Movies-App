import { useDispatch, useSelector } from "react-redux";
import { addRemoveMovie } from "../store/slices/watchList";

const movies = [
  { id: 1, name: "movie 1" },
  { id: 2, name: "movie 2" },
  { id: 3, name: "movie 3" },
];

const MoviesList = () => {
  const watchList = useSelector((state) => state.watchList.moviesWatchList);
  const dispatch = useDispatch();

  const handleWatchList = (movie) => {
    dispatch(
      addRemoveMovie({
        id: movie.id,
        name: movie.name,
      })
    );
  };

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.name}</h1>
          <button
            onClick={() => handleWatchList(movie)}
            className={`${
              watchList.find((item) => item.id === movie.id) ? "green" : "red"
            }`}
          >
            add to list
          </button>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
