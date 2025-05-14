import "./Favourites.css";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import TVShowsCard from "../../components/TVshowsCard/TVShowsCard";
import { useLanguage } from "../../Context/languageContext";

function Favorites() {
  const { language } = useLanguage();
  const moviesWatchList = useSelector(
    (state) => state.watchList.moviesWatchList
  );
  const showsWatchList = useSelector((state) => state.watchList.showsWatchList);

  return (
    <div className={`container lang-${language}`}>
      <h2 className="now-playing mt-5">
        {language === "ar" ? "قائمتي المفضلة" : language === "fr" ? "Ma liste de favoris" : language === "zh" ? "我的收藏夹" : "My Watchlist"}
      </h2>

      {moviesWatchList.length === 0 ? (
        <p className="text-center mt-5">
          {language === "ar" ? "لا توجد أفلام مفضلة" : language === "fr" ? "Aucun film favori" : language === "zh" ? "没有喜欢的电影" : "No Movie favourites"}
        </p>
      ) : (
        <div className="row mt-4 g-4">
          <h2>{language === "ar" ? "الأفلام" : language === "fr" ? "Films" : language === "zh" ? "电影" : "Movies"}</h2>
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
        <p className="text-center mt-5">
          {language === "ar" ? "لا توجد برامج تلفزيونية مفضلة" : language === "fr" ? "Aucune émission TV favorite" : language === "zh" ? "没有喜欢的电视剧" : "No TV Show favourites"}
        </p>
      ) : (
        <div className="row mt-4 g-4">
          <h2>{language === "ar" ? "البرامج التلفزيونية" : language === "fr" ? "Émissions TV" : language === "zh" ? "电视剧" : "TV Shows"}</h2>
          {showsWatchList.map((show) => (
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 h-100"
              key={show.id}
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