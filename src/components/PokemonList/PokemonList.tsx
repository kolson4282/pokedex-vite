import { useQuery } from "react-query";
import PokemonCard from "../PokemonCard/PokemonCard";

type Props = {
  offset: number;
  limit: number;
};

const PokemonList = ({ offset, limit }: Props) => {
  const pokemon = useQuery(["list", { offset, limit }], async () => {
    return fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    ).then((res) => res.json());
  });

  if (pokemon.isLoading) return <p>...Loading</p>;

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemon?.data.results.map((pkmn: { name: string }) => (
          <PokemonCard key={pkmn.name} name={pkmn.name} />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
