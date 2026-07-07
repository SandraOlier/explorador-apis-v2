import { Link, useNavigate, useParams } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import useCharacterDetail from "../hooks/useCharacterDetail";

function CharacterDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { character, loading, error } = useCharacterDetail(id ?? "");
  const { addFavorite, isFavorite, removeFavorite } = useFavorites();

  if (loading) {
    return (
      <div className="app-shell">
        <p className="loading">Cargando detalle...</p>
      </div>
    );
  }

  if (error || !character) {
    return (
      <div className="app-shell">
        <p className="error">{error ?? "No se encontró el personaje."}</p>
      </div>
    );
  }

  const favorite = isFavorite(character.id);

  return (
    <div className="app-shell">
      <Link className="back-link" to="/">
        ← Volver al inicio
      </Link>

      <div className="detail-page">
        <div className="detail-card">
          <img src={character.image} alt={character.name} />
        </div>

        <div className="detail-card">
          <div className="detail-meta">
            <h2>{character.name}</h2>
            <div className="meta-row">
              <span>Estado: {character.status}</span>
              <span>Especie: {character.species}</span>
            </div>
            <p>
              <strong>Género:</strong> {character.gender ?? "Desconocido"}
            </p>
            <p>
              <strong>Origen:</strong> {character.origin?.name ?? "Desconocido"}
            </p>
            <p>
              <strong>Última ubicación:</strong> {character.location?.name ?? "Desconocido"}
            </p>
            <div className="card-actions">
              <button
                type="button"
                className="card-button"
                onClick={() => (favorite ? removeFavorite(character.id) : addFavorite(character))}
              >
                {favorite ? "Quitar favorito" : "Agregar favorito"}
              </button>
              <button type="button" className="card-button" onClick={() => navigate(-1)}>
                Volver atrás
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
