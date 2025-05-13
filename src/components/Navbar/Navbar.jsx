import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLanguage } from "../../Context/languageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const { language, setLanguage } = useLanguage();

  const changeDirection = (language) => {
    setLanguage(language);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container-fluid">
        <div className="navbar-brand fs-3">Movies</div>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link px-3">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tvShows" className="nav-link px-3">
              TV Shows
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favourites" className="nav-link px-3">
              Favourites
            </Link>
          </li>
        </ul>

        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
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
