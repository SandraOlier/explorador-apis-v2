import { useState, useEffect } from "react";

interface Character {
  id: number;
  name: string;
  image: string;
}

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar personajes");
        setLoading(false);
      });
  }, []);

  return { characters, loading, error };
}

