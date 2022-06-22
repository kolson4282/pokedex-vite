import { useQuery } from "react-query";

type Props = {
  name: string;
};

const PokemonCard = ({ name }: Props) => {
  const pokemonInfo = useQuery([`pokemon`, { name }], () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
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
        alt={name}
      />
      <div>{name}</div>
    </div>
  );
};

export default PokemonCard;
