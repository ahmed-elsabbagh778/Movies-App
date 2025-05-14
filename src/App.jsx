import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { LanguageProvider } from "./Context/languageContext";
import MoviesList from "./Pages/MoviesList/MoviesList.jsx";
import Favourites from "./Pages/Favourites/Favourites.jsx";
import NotFound from "./Pages/NotFound.jsx";
import TvShowsList from "./Pages/TVshowsList/TVShowsList.jsx";
import TVshowsDetails from "./Pages/TVshowsDetails/TVshowsDetails.jsx";
import MovieDetails from "./Pages/MovieDetails/MovieDetails.jsx";

function App() {
  return (
    <LanguageProvider>
      <MoviesList />
      <TvShowsList />
      <Favourites />
      <TVshowsDetails />
      <MovieDetails />
      <NotFound />
    </LanguageProvider>
  );
}

export default App;
