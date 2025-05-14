import "./Favourites.css";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import TVShowsCard from "../../components/TVShowsCard/TVShowsCard";
import { faShower } from "@fortawesome/free-solid-svg-icons";

function Favorites() {
  const moviesWatchList = useSelector(
    (state) => state.watchList.moviesWatchList
  );
  const showsWatchList = useSelector((state) => state.watchList.showsWatchList);

  return (
    <div className="container">
      <h2 className="now-playing mt-5">My Watchlist</h2>

      {moviesWatchList.length === 0 ? (
        <p className="text-center mt-5">No Movie favourites</p>
      ) : (
        <div className="row mt-4 g-4">
          <h2>Movies</h2>
          {moviesWatchList.map((movie) => (
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 h-100"
              key={movie.id}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}

      {showsWatchList.length === 0 ? (
        <p className="text-center mt-5">No TV Show favourites</p>
      ) : (
        <div className="row mt-4 g-4">
          <h2>TV Shows</h2>

          {showsWatchList.map((show) => (
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 h-100"
              key={faShower.id}
            >
              <TVShowsCard tvShow={show} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
