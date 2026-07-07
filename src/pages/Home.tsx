import { useCharacters } from "../hooks/useCharacters";
import CardItem from "../components/CardItem";

function Home() {
  const { characters, loading, error } = useCharacters();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Explorador Rick & Morty</h1>
      <div className="grid">
        {characters.map((char) => (
          <CardItem key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

export default Home;
