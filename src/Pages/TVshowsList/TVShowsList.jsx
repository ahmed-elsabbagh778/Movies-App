import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/config";
import { useLanguage } from "../../Context/languageContext";
import './TVShowsList.css';
import { Pagination } from "react-bootstrap";
import renderPaginationItems from "../../components/Pagination/Pagination";
import TvShowsCard from "../../components/TVshowsCard/TVShowsCard";

const TvShowsList = () => {
  const [tvShows, setTvShows] = useState([]);
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { language } = useLanguage();

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    axiosInstance
      .get(`/tv/popular?api_key=${apiKey}&page=${page}&language=${language}`)
      .then((res) => {
        setTvShows(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  }, [page, language]);

  return (
    <>
      {/* ----------shows List---------------- */}
      <div className="container">
        <div className="row mt-5 g-4">
          <h2 className="popular">Popular TV Shows</h2>
          {tvShows.map((tvShow) => {
            return (
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-sm-6 h-100"
                key={tvShow.id}
              >
                <TvShowsCard tvShow={tvShow} />
              </div>
            );
          })}
        </div>
        {/* ----------shows List---------------- */}
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

export default TvShowsList;
