import GridResultados from "../components/GridResultados";
import { useFavorites } from "../context/FavoritesContext";

function Favoritos() {
  const { favorites } = useFavorites();

  return (
    <div className="app-shell">
      <section className="hero-section">
        <p className="eyebrow">Favoritos</p>
        <h1>Tus personajes guardados</h1>
        <p className="subtitle">
          Aquí encontrarás los personajes que hayas marcado para revisar más tarde.
        </p>
      </section>

      {favorites.length === 0 ? (
        <div className="empty-state-card">
          <h3>Aún no tienes favoritos</h3>
          <p>Explora la lista y guarda personajes para verlos aquí.</p>
        </div>
      ) : (
        <>
          <div className="status-row">
            <span className="result-count">{favorites.length} favoritos</span>
          </div>
          <GridResultados characters={favorites} />
        </>
      )}
    </div>
  );
}

export default Favoritos;
