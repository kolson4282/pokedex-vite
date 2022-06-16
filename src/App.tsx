import { QueryClient, QueryClientProvider } from "react-query";

import PokemonCard from "./components/PokemonCard/PokemonCard";

const starters = ["bulbasaur", "charmander", "squirtle"];
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {starters.map((pkmn) => (
        <PokemonCard key={pkmn} name={pkmn} />
      ))}
    </QueryClientProvider>
  );
}

export default App;
