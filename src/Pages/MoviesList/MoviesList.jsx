import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/config";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./MoviesList.css";
import { Pagination } from "react-bootstrap";
import renderPaginationItems from "../../components/Pagination/Pagination";
import { useLanguage } from "../../Context/languageContext";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const { language } = useLanguage();

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    axiosInstance
      .get(
        `/movie/now_playing?api_key=${apiKey}&page=${page}&language=${language}`
      )
      .then((res) => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  }, [page, language]);

  return (
    <>
      {/* ----------Movies List---------------- */}
      <div className="container">
        <div className="row mt-5 g-4">
          <h2 className="now-playing">Now Playing</h2>
          {movies.map((movie) => {
            return (
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-sm-6 h-100"
                key={movie.id}
              >
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
        {/* ----------Movies List---------------- */}

        {/* ----------Pagination---------------- */}
        <Pagination>
          <Pagination.First
            onClick={() => changePage(1)}
            disabled={page === 1}
          />
          <Pagination.Prev
            onClick={() => changePage(page - 1)}
            disabled={page === 1}
          />

          {renderPaginationItems({ page, totalPages, changePage })}

          <Pagination.Next
            onClick={() => changePage(page + 1)}
            disabled={page === totalPages}
          />
          <Pagination.Last
            onClick={() => changePage(totalPages)}
            disabled={page === totalPages}
          />
        </Pagination>
        {/* ----------Pagination---------------- */}
      </div>
    </>
  );
};

export default MoviesList;
