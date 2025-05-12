import { useDispatch, useSelector } from "react-redux";
import { addRemoveMovie } from "../store/slices/watchList";
import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/config";
import MovieCard from "../components/MovieCard/MovieCard";




const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_APP_API_KEY;

useEffect(() => {
  axiosInstance
    .get(`/movie/now_playing?api_key=${apiKey}`)
    .then((res) => setMovies(res.data.results))
    .catch((err) => console.log(err));
}, []);

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

    <>
      <div className="container">
        <div className="row mt-5 g-4">
          {movies.map((movie) => {
            return (
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
