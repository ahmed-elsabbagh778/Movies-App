import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { axiosInstance } from "../../apis/config";
import TVShowsCard from "../../components/TVshowsCard/TVShowsCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import renderPaginationItems from "../../components/Pagination/Pagination";
import { useLanguage } from "../../Context/languageContext";

const TVShowsList = () => {
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const { language } = useLanguage();

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/tv/popular?api_key=${apiKey}&page=${page}&language=${language}`)
      .then((res) => {
        setTvShows(res.data.results);
        setTotalPages(Math.min(res.data.total_pages, 492));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [page, language, apiKey]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className={`container lang-${language}`}>
      <div className="row mt-5 g-4">
        <h2 className="popular">
          {language === "ar" ? "البرامج التلفزيونية" :
            language === "fr" ? "Émissions TV" :
              language === "zh" ? "电视剧" :
                "TV Shows"}
        </h2>
        {tvShows.length === 0 ? (
          <p className="text-center mt-5">
            {language === "ar" ? "لا توجد برامج تلفزيونية متاحة" :
              language === "fr" ? "Aucune émission TV disponible" :
                language === "zh" ? "没有可用的电视剧" :
                  "No TV shows available"}
          </p>
        ) : (
          tvShows.map((show) => (
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-6 h-100"
              key={show.id}
            >
              <TVShowsCard tvShow={show} />
            </div>
          ))
        )}
      </div>
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
    </div>
  );
};

export default TVShowsList;