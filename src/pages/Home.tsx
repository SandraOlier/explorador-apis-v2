<<<<<<< HEAD
import { useEffect, useState } from "react";
import type { Character } from "../types/Character";
import { Header } from "../components/Header";
import { GridResultados } from "../components/GridResultados";
import { Footer } from "../components/Footer";

const API_URL = import.meta.env.VITE_API_URL ?? "https://rickandmortyapi.com/api/character";

export function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const query = search ? `/?name=${encodeURIComponent(search)}` : "";
        const res = await fetch(`${API_URL}${query}`);

        if (!res.ok) {
          throw new Error(`Error ${res.status}`);
        }

        const data = await res.json();
        setCharacters(data.results ?? []);

        if (!data.results || data.results.length === 0) {
          setError("No se encontraron personajes.");
        }
      } catch (err) {
        setCharacters([]);
        setError("No se encontraron resultados o hay un problema con la API.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="app-shell">
      <section className="hero-section">
        <div>
          <p className="eyebrow">Rick & Morty API Explorer</p>
          <h1>Encuentra personajes de Rick and Morty</h1>
          <p className="subtitle">
            Busca por nombre, explora personajes y disfruta de una interfaz limpia
            con React + TypeScript.
          </p>
        </div>
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
=======
import { useEffect, useState } from "react";
import type { Character } from "../types/Character";
import { Header } from "../components/Header";
import { GridResultados } from "../components/GridResultados";
import { Footer } from "../components/Footer";

const API_URL = import.meta.env.VITE_API_URL ?? "https://rickandmortyapi.com/api/character";

export function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const query = search ? `/?name=${encodeURIComponent(search)}` : "";
        const res = await fetch(`${API_URL}${query}`);

        if (!res.ok) {
          throw new Error(`Error ${res.status}`);
        }

        const data = await res.json();
        setCharacters(data.results ?? []);

        if (!data.results || data.results.length === 0) {
          setError("No se encontraron personajes.");
        }
      } catch (err) {
        setCharacters([]);
        setError("No se encontraron resultados o hay un problema con la API.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="app-shell">
      <section className="hero-section">
        <div>
          <p className="eyebrow">Rick & Morty API Explorer</p>
          <h1>Encuentra personajes de Rick and Morty</h1>
          <p className="subtitle">
            Busca por nombre, explora personajes y disfruta de una interfaz limpia
            con React + TypeScript.
          </p>
        </div>
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
>>>>>>> 80ee51d20a06fddce60da0a7b0a5016afb21d675
