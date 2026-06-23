import { Header } from "../components/Header";
import { GridResultados } from "../components/GridResultados";
import { Footer } from "../components/Footer";
import { useCharacters } from "../hooks/useCharacters";

export function Home() {
  const { characters, search, setSearch, loading, error } = useCharacters();

  return (
    <div className="app-shell">
      <section className="hero-section">
        <p className="eyebrow">Rick & Morty API Explorer</p>
        <h1>Encuentra personajes de Rick and Morty</h1>
        <p className="subtitle">
          Busca por nombre, explora personajes y disfruta de una interfaz limpia con React + TypeScript.
        </p>
      </section>

      <section className="search-panel">
        <Header onSearch={setSearch} onReset={() => setSearch("")} />
        <div className="status-row">
          {loading ? (
            <span className="loading">Cargando resultados...</span>
          ) : (
            <span className="result-count">{characters.length} personajes encontrados</span>
          )}
        </div>
      </section>

      {error && <p className="error">{error}</p>}
      <GridResultados characters={characters} hasError={!!error} />
      <Footer />
    </div>
  );
}
