import "./Favourites.css";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";

function Favorites() {
  const watchList = useSelector((state) => state.watchList.moviesWatchList);

  return (
    <div className="container">
      <h2 className="now-playing mt-5">My Watchlist</h2>

      {watchList.length === 0 ? (
        <p className="text-center mt-5">No favourites</p>
      ) : (
        <div className="row mt-4 g-4">
          {watchList.map((movie) => (
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 h-100"
              key={movie.id}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
