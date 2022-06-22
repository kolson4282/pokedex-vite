import { useState } from "react";
import { useQuery } from "react-query";
import PokemonCard from "../components/PokemonCard/PokemonCard";

const Home = () => {
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=0`
  );

  const pokemon = useQuery(url, () => {
    return fetch(url).then((res) => res.json());
  });

  const previous = () => {
    setUrl(pokemon.data.previous);
  };

  const next = () => {
    setUrl(pokemon.data.next);
  };

  if (pokemon.isLoading) return <p>...Loading</p>;

  return (
    <>
      {!pokemon.data.previous || <button onClick={previous}>Prev</button>}
      {!pokemon.data.next || <button onClick={next}>Next</button>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemon?.data.results.map((pkmn: { name: string }) => (
          <PokemonCard key={pkmn.name} name={pkmn.name} />
        ))}
      </div>
    </>
  );
};

export default Home;
