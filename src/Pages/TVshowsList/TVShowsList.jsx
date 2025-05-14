import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/config";
import TVShowsCard from "../../components/TVShowsCard/TVShowsCard";
import "./TVShowsList.css";
import { useLanguage } from "../../Context/languageContext";

const TVShowsList = () => {
  const [shows, setShows] = useState([]);
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const { language } = useLanguage();

  useEffect(() => {
    axiosInstance
      .get(`/tv/popular?api_key=${apiKey}&language=${language}`)
      .then((res) => setShows(res.data.results))
      .catch((err) => console.log(err));
  }, [language]);

  return (
    <div className={`container lang-${language}`}>
      <h2 className="popular-tv-shows mt-5">
        {language === "ar" ? "البرامج التلفزيونية الشعبية" : language === "fr" ? "Émissions TV populaires" : language === "zh" ? "热门电视剧" : "Popular TV Shows"}
      </h2>
      <div className="row mt-4 g-4">
        {shows.map((show) => (
          <div
            className="col-xl-2 col-lg-3 col-md-4 col-sm-6 h-100"
            key={show.id}
          >
            <TVShowsCard tvShow={show} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShowsList;