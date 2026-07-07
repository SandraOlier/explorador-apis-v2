import CardItem from "./CardItem";
import type { Character } from "../types/Character";

interface Props {
  characters: Character[];
}

function GridResultados({ characters }: Props) {
  return (
    <div className="grid">
      {characters.map((character) => (
        <CardItem key={character.id} character={character} />
      ))}
    </div>
  );
}

export default GridResultados;


