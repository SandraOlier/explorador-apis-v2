import { useEffect, useState } from "react";
import type { Character } from "../types/Character";

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if (!response.ok) {
          throw new Error("No se pudieron cargar los personajes");
        }

        const data = (await response.json()) as { results?: Character[] };
        if (isMounted) {
          setCharacters(Array.isArray(data.results) ? data.results : []);
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          setError("Error al cargar personajes");
          setLoading(false);
        }
      }
    };

    void fetchCharacters();

    return () => {
      isMounted = false;
    };
  }, []);

  return { characters, loading, error };
}

