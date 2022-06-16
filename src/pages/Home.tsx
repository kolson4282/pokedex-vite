import { useQuery } from "react-query";
import PokemonCard from "../components/PokemonCard/PokemonCard";

const Home = () => {
  const pokemon = useQuery("pkmn-list", () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/`).then((res) =>
      res.json()
    );
  });
  if (pokemon.isLoading) return <p>...Loading</p>;

  return (
    <div>
      {pokemon?.data.results.map((pkmn: { name: string }) => (
        <PokemonCard key={pkmn.name} name={pkmn.name} />
      ))}
    </div>
  );
};

export default Home;
