import { Link } from "react-router-dom";
import type { Character } from "../types/Character";

interface CardItemProps {
  character: Character;
}

export function CardItem({ character }: CardItemProps) {
  return (
    <Link to={`/character/${character.id}`} className="card-link">
      <div className="card">
        <img src={character.image} alt={character.name} />
        <div className="card-info">
          <h3>{character.name}</h3>
          <p>{character.species} • {character.status}</p>
          <div className="card-actions">
            <span className="card-button">
              Ver detalle <span className="card-button-icon">➜</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
