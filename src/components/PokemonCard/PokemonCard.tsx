import { useQuery } from "react-query";
import { fetchFromEndpoint } from "../../utils/utils";

type Props = {
  id: number;
};

const PokemonCard = ({ id }: Props) => {
  const pokemonInfo = useQuery([`pokemon`, { id }], () => {
    return fetchFromEndpoint(`pokemon/${id}`);
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
