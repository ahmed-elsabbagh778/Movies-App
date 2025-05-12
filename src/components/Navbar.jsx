import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li>
          <Link to="/">Movies List</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
