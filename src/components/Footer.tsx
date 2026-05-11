import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Character } from "../types/Character";

const API_URL = import.meta.env.VITE_API_URL ?? "https://rickandmortyapi.com/api/character";

export function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCharacter = async () => {
      if (!id) {
        setError("ID de personaje no válido.");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_URL}/${id}`);

        if (!res.ok) {
          throw new Error(`Error ${res.status}`);
        }

        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        setError("No se pudo cargar el personaje.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCharacter();
  }, [id]);

  if (loading) {
    return <p className="loading">Cargando detalles...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!character) {
    return <p className="empty-state">Personaje no encontrado.</p>;
  }

  return (
    <div className="app-shell">
      <Link to="/" className="back-link">
        ← Volver a la búsqueda
      </Link>

      <div className="detail-page">
        <div className="detail-card">
          <img src={character.image} alt={character.name} />
        </div>

        <div className="detail-card detail-meta">
          <h2>{character.name}</h2>
          <div className="meta-row">
            <span>{character.status}</span>
            <span>{character.species}</span>
            {character.gender && <span>{character.gender}</span>}
          </div>

          {character.origin?.name && (
            <p>
              <strong>Origen:</strong> {character.origin.name}
            </p>
          )}
          {character.location?.name && (
            <p>
              <strong>Ubicación:</strong> {character.location.name}
            </p>
          )}
          {character.type && (
            <p>
              <strong>Tipo:</strong> {character.type}
            </p>
          )}
          <p>
            <strong>Episodios:</strong> {character.episode?.length ?? 0}
          </p>
        </div>
      </div>
    </div>
  );
}
