import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../apis/config";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Pagination } from "react-bootstrap";
import renderPaginationItems from "../../components/Pagination/Pagination";
import { useLanguage } from "../../Context/languageContext";
import "./SearchResults.css";

const SearchResults = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { query } = useParams();
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
                `/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
                    query
                )}&page=${page}&language=${language}`
            )
            .then((res) => {
                setMovies(res.data.results);
                setTotalPages(res.data.total_pages);
            })
            .catch((err) => console.log(err));
    }, [page, query, language]);

    return (
        <div className="container">
            <div className="row mt-5 g-4">
                <h2 className="search-results">
                    {language === "ar"
                        ? `نتائج البحث عن "${query}"`
                        : `Search Results for "${query}"`}
                </h2>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div
                            className="col-xl-2 col-lg-3 col-md-4 col-6 h-100"
                            key={movie.id}
                        >
                            <MovieCard movie={movie} />
                        </div>
                    ))
                ) : (
                    <p>
                        {language === "ar"
                            ? "لا توجد نتائج مطابقة."
                            : "No results found."}
                    </p>
                )}
            </div>
            {movies.length > 0 && (
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
            )}
        </div>
    );
};

export default SearchResults;