import { useQuery } from "react-query";

type Props = {
  name: string;
};

const PokemonCard = ({ name }: Props) => {
  const pokemon = useQuery(`${name}-card`, () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
      res.json()
    );
  });

  if (pokemon.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div>{pokemon.data?.id}</div>
      <img
        style={{ width: "10em" }}
        src={pokemon.data?.sprites.other["official-artwork"].front_default}
        alt={name}
      />
      <div>{name}</div>
    </div>
  );
};

export default PokemonCard;
