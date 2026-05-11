<<<<<<< HEAD
import type { Character } from "../types/Character";
import { CardItem } from "./CardItem";

interface GridResultadosProps {
  characters: Character[];
  hasError?: boolean;
}

export function GridResultados({ characters, hasError }: GridResultadosProps) {
  if (characters.length === 0) {
    if (hasError) {
      return null;
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
=======
import type { Character } from "../types/Character";
import { CardItem } from "./CardItem";

interface GridResultadosProps {
  characters: Character[];
  hasError?: boolean;
}

export function GridResultados({ characters, hasError }: GridResultadosProps) {
  if (characters.length === 0) {
    if (hasError) {
      return null;
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
>>>>>>> 80ee51d20a06fddce60da0a7b0a5016afb21d675
