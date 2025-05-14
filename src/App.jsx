import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import RoutesList from "./Routes/RoutesList";
import { LanguageProvider } from "./Context/languageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <RoutesList />
      </Router>
    </LanguageProvider>
  );
}

export default App;
