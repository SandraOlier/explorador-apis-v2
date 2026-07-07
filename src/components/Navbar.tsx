import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav className="navbar">
      <h2>Rick & Morty Explorer</h2>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <span>Favoritos: {favorites.length}</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
