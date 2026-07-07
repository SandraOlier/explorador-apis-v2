import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import type { Character } from "../types/Character";

interface Props {
  character: Character;
}

function CardItem({ character }: Props) {
  const { addFavorite, isFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(character.id);

  return (
    <article className="card">
      <Link
        className="card-visual-link"
        to={`/character/${character.id}`}
        aria-label={`Ver detalle de ${character.name}`}
      >
        <img src={character.image} alt={character.name} />
      </Link>
      <div className="card-info">
        <Link className="card-title-link" to={`/character/${character.id}`}>
          <h3>{character.name}</h3>
        </Link>
        <p>{character.species}</p>
        <div className="card-actions">
          <Link className="card-button" to={`/character/${character.id}`}>
            Ver detalle
          </Link>
          <button
            type="button"
            className="card-button"
            onClick={() => (favorite ? removeFavorite(character.id) : addFavorite(character))}
          >
            {favorite ? "Quitar favorito" : "Agregar favorito"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardItem;

