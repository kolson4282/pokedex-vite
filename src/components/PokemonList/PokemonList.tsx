import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard/PokemonCard";

type Props = {
  offset: number;
  limit: number;
};

const createPokemonCards = (offset: number, limit: number) => {
  let pokemon = [];
  for (let i = offset + 1; i <= offset + limit; i++) {
    pokemon.push(
      <Link key={i} to={`/pokemon/${i}`}>
        <PokemonCard id={i} />
      </Link>
    );
  }
  return pokemon;
};

const PokemonList = ({ offset, limit }: Props) => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {createPokemonCards(offset, limit)}
      </div>
    </>
  );
};

export default PokemonList;
