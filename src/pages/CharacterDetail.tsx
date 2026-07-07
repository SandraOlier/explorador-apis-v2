import { useNavigate, useParams } from "react-router-dom";
import useCharacterDetail from "../hooks/useCharacterDetail";

function CharacterDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { character, loading, error } = useCharacterDetail(id!);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!character) return <p>No se encontró el personaje.</p>;

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>{character.status} - {character.species}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
}

export default CharacterDetail;
