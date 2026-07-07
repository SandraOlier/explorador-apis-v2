import { useState, useEffect } from "react";

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

export default function useCharacterDetail(id: string) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar detalle");
        setLoading(false);
      });
  }, [id]);

  return { character, loading, error };
}


  
