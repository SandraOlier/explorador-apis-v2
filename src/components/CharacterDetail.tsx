import { Link, useParams } from "react-router-dom";
import type { Character } from "../types/Character";
import { useCharacterDetail } from "../hooks/useCharacterDetail";

export function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const { character, loading, error } = useCharacterDetail(id);

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
