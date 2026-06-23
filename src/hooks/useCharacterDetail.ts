import { useEffect, useState } from "react";
import type { Character } from "../types/Character";

const API_URL =
  import.meta.env.VITE_API_URL ?? "https://rickandmortyapi.com/api/character";

export function useCharacterDetail(id: string) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error(`Error ${res.status}`);

        const data = await res.json();
        setCharacter(data);
      } catch {
        setError("No se pudo cargar el detalle del personaje.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  return { character, error, loading };
}
