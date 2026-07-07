import { Link } from "react-router-dom";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface Props {
  character: Character;
}

function CardItem({ character }: Props) {
  return (
    <div className="card">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <Link to={`/character/${character.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default CardItem;

