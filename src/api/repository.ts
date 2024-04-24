export const getPokemonApi = () => {
  const response = fetch('https://pokeapi.co/api/v2/pokemon');
  return response;
};

export const getPokemonDetailApi = (name: string) => {
  const response = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response;
};
