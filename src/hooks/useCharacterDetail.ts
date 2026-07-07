import { useEffect, useState } from "react";
import type { Character } from "../types/Character";

export default function useCharacterDetail(id: string) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCharacter = async () => {
      if (!id) {
        if (isMounted) {
          setCharacter(null);
          setLoading(false);
          setError("No se encontró el personaje");
        }
        return;
      }

      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) {
          throw new Error("Detalle no disponible");
        }

        const data = (await response.json()) as Character;
        if (isMounted) {
          setCharacter(data);
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          setError("Error al cargar detalle");
          setLoading(false);
        }
      }
    };

    void fetchCharacter();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { character, loading, error };
}
