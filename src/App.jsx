import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import RoutesList from "./Routes/RoutesList";

function App() {
  return (
    <Router>
      <Navbar />
      <RoutesList />
    </Router>
  );
}

export default App;
