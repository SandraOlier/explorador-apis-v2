import { useEffect, useState } from "react";
import type { Character } from "../types/Character";

const API_URL =
  import.meta.env.VITE_API_URL ?? "https://rickandmortyapi.com/api/character";

export function useCharacters() {
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

        if (!res.ok) throw new Error(`Error ${res.status}`);

        const data = await res.json();
        setCharacters(data.results ?? []);

        if (!data.results || data.results.length === 0) {
          setError("No se encontraron personajes.");
        }
      } catch {
        setCharacters([]);
        setError("No se encontraron resultados o hay un problema con la API.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return { characters, search, setSearch, error, loading };
}
