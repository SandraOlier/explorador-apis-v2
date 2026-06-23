import { useFavorites } from "../context/FavoritesContext";

export function CardItem({ character }: { character: Character }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <div className="card-info">
        <h3>{character.name}</h3>
        <p>{character.species}</p>
        <div className="card-actions">
          {isFavorite(character.id) ? (
            <button
              className="card-button"
              onClick={() => removeFavorite(character.id)}
            >
              Quitar Favorito
            </button>
          ) : (
            <button
              className="card-button"
              onClick={() => addFavorite(character)}
            >
              Agregar Favorito
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
