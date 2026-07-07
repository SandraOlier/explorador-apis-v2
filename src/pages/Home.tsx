import { useMemo, useState } from "react";
import GridResultados from "../components/GridResultados";
import { useCharacters } from "../hooks/useCharacters";

function Home() {
  const { characters, loading, error } = useCharacters();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCharacters = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    if (!normalized) {
      return characters;
    }

    return characters.filter((character) => character.name.toLowerCase().includes(normalized));
  }, [characters, searchTerm]);

  return (
    <div className="app-shell">
      <section className="hero-section">
        <p className="eyebrow">Actividad 3</p>
        <h1>Explorador de personajes</h1>
        <p className="subtitle">
          Explora el universo de Rick y Morty, abre el detalle de cada personaje y guarda tus favoritos desde cualquier pantalla.
        </p>
      </section>

      <section className="search-panel">
        <div className="search-wrapper">
          <input
            className="search-input"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar por nombre"
          />
          <button type="button" className="reset-button" onClick={() => setSearchTerm("")}>
            Limpiar
          </button>
        </div>
      </section>

      <div className="status-row">
        <span className="result-count">{filteredCharacters.length} personajes</span>
      </div>

      {loading ? (
        <p className="loading">Cargando personajes...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : filteredCharacters.length === 0 ? (
        <p className="empty-state">No se encontraron personajes con ese nombre.</p>
      ) : (
        <GridResultados characters={filteredCharacters} />
      )}
    </div>
  );
}

export default Home;
