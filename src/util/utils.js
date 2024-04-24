export function getImageUrl(pokemon) {
  return (
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
    pokemon.name +
    '.png'
  );
}
