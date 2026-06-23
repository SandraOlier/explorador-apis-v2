
import { useFavorites } from "../context/FavoritesContext";
import { GridResultados } from "../components/GridResultados";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function Favoritos() {
  const { favorites } = useFavorites();

  return (
    <div className="app-shell">
      <section className="hero-section">
        <h1>Mis Favoritos</h1>
        <p className="subtitle">Aquí puedes ver los personajes que guardaste como favoritos.</p>
      </section>

      {favorites.length === 0 ? (
        <p className="empty-state">No tienes personajes favoritos aún.</p>
      ) : (
        <GridResultados characters={favorites} />
      )}

      {/* 🔹 Botón volver a inicio */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/" className="submit-button">Volver a Inicio</Link>
      </div>

      <Footer />
    </div>
  );
}
