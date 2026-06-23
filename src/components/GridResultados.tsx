import type { Character } from "../types/Character";
import { CardItem } from "./CardItem";

interface GridResultadosProps {
  characters: Character[];
  hasError?: boolean;
}

export function GridResultados({ characters, hasError }: GridResultadosProps) {
  if (characters.length === 0) {
    if (hasError) {
      return <p className="error">Ocurrió un error al cargar los personajes.</p>;
    }

    return <p className="empty-state">No hay personajes para mostrar.</p>;
  }

  return (
    <div className="grid">
      {characters.map((c) => (
        <CardItem key={c.id} character={c} />
      ))}
    </div>
  );
}

