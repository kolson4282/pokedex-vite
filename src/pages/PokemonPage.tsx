import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchFromEndpoint } from "../utils/utils";

const PokemonPage = () => {
  const { id } = useParams();

  const pokemonSpecies = useQuery([`pokemon-species`, { id }], () => {
    return fetchFromEndpoint(`pokemon-species/${id}`);
  });

  const pokemonInfo = useQuery([`pokemon`, { id }], () => {
    return fetchFromEndpoint(`pokemon/${id}`);
  });

  if (pokemonSpecies.isLoading || pokemonInfo.isLoading)
    return <p>Loading...</p>;

  return (
    <div>
      {pokemonSpecies.data?.name}
      <img
        style={{ width: "10em" }}
        src={pokemonInfo.data?.sprites.other["official-artwork"].front_default}
        alt={pokemonInfo.data?.name}
      />
    </div>
  );
};

export default PokemonPage;
