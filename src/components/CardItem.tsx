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
      <img src={character.image} alt={character.name} />
      <div className="card-info">
        <h3>{character.name}</h3>
        <p>{character.species}</p>
        <div className="card-actions">
          <Link className="card-button" to={`/item/${character.id}`}>
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

