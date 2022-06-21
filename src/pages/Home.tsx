import { useState } from "react";
import { useQuery } from "react-query";
import PokemonCard from "../components/PokemonCard/PokemonCard";

const Home = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const pokemon = useQuery(url, () => {
    return fetch(url).then((res) => res.json());
  });
  if (pokemon.isLoading) return <p>...Loading</p>;

  return (
    <>
      {!pokemon.data.previous || (
        <button onClick={() => setUrl(pokemon.data.previous)}>Prev</button>
      )}
      {!pokemon.data.next || (
        <button onClick={() => setUrl(pokemon.data.next)}>Next</button>
      )}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemon?.data.results.map((pkmn: { name: string }) => (
          <PokemonCard key={pkmn.name} name={pkmn.name} />
        ))}
      </div>
    </>
  );
};

export default Home;
