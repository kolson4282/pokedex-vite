import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import PokemonCard from "./components/PokemonCard/PokemonCard";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
