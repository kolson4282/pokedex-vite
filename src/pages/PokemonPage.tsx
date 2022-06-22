import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const PokemonPage = () => {
  const { id } = useParams();

  const pokemonSpecies = useQuery([`pokemon-species`, { id }], () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(
      (res) => res.json()
    );
  });

  const pokemonInfo = useQuery([`pokemon`, { id }], () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
      res.json()
    );
  });

  if (pokemonSpecies.isLoading || pokemonInfo.isLoading)
    return <p>Loading...</p>;

  return (
    <div>
      {pokemonSpecies.data?.name}{" "}
      <img
        style={{ width: "10em" }}
        src={pokemonInfo.data?.sprites.other["official-artwork"].front_default}
        alt={pokemonInfo.data?.name}
      />
    </div>
  );
};

export default PokemonPage;
