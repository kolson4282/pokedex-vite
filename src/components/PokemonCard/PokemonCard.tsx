import { useQuery } from "react-query";

type Props = {
  id: number;
};

const PokemonCard = ({ id }: Props) => {
  const pokemonInfo = useQuery([`pokemon`, { id }], () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
      res.json()
    );
  });

  if (pokemonInfo.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div>{pokemonInfo.data?.id}</div>
      <img
        style={{ width: "10em" }}
        src={pokemonInfo.data?.sprites.other["official-artwork"].front_default}
        alt={pokemonInfo.data?.name}
      />
      <div>{pokemonInfo.data?.name}</div>
    </div>
  );
};

export default PokemonCard;
