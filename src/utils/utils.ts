export const fetchFromEndpoint = (endpoint: string) => {
  return fetch(`https://pokeapi.co/api/v2/${endpoint}`).then((res) =>
    res.json()
  );
};
