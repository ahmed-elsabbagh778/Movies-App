import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLanguage } from "../../Context/languageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const changeDirection = (lang) => {
    setLanguage(lang);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container-fluid">
        <div className="navbar-brand fs-3">Movie Box</div>

        <ul className="navbar-nav me-lg-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link px-3">
              {language === "ar" ? "الأفلام" : language === "fr" ? "Films" : language === "zh" ? "电影" : "Movies"}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tvShows" className="nav-link px-3">
              {language === "ar" ? "البرامج التلفزيونية" : language === "fr" ? "Émissions TV" : language === "zh" ? "电视剧" : "TV Shows"}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favourites" className="nav-link px-3">
              {language === "ar" ? "المفضلة" : language === "fr" ? "Favoris" : language === "zh" ? "收藏" : "Favourites"}
            </Link>
          </li>
        </ul>

        <form className={`d-flex me-3 lang-${language}`} onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control me-2 search-input"
            placeholder={language === "ar" ? "ابحث عن فيلم..." : language === "fr" ? "Rechercher un film..." : language === "zh" ? "搜索电影..." : "Search for a movie..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-outline-light" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="languageDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faLanguage} className="me-2" />
            {language.toUpperCase()}
          </button>

          <ul
            className="dropdown-menu dropdown-menu-end shadow-lg"
            aria-labelledby="languageDropdown"
          >
            <li>
              <button
                className="dropdown-item"
                onClick={() => changeDirection("en")}
              >
                English
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => changeDirection("ar")}
              >
                العربية
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => changeDirection("fr")}
              >
                Français
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => changeDirection("zh")}
              >
                中文
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;