import { useState } from "react";
import PokemonList from "../components/PokemonList/PokemonList";

const NUM_OF_POKEMON = 1126;

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const previous = () => {
    setOffset((prevOffset) => prevOffset - limit);
  };

  const next = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  return (
    <>
      {offset == 0 || <button onClick={previous}>Prev</button>}
      {offset <= NUM_OF_POKEMON - limit ? (
        <button onClick={next}>Next</button>
      ) : null}
      <PokemonList offset={offset} limit={limit} />
    </>
  );
};

export default Home;
