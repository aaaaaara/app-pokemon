import { GetPokemonDTO } from '@/types/interface/interface';

const POKEMON_KEY_IN_LOCAL_STORAGE = 'pokemonLoName';

export function getImageUrl(pokemon: { name: string }) {
  return (
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
    pokemon.name +
    '.png'
  );
}

export const pokemonData = (pokemon: GetPokemonDTO[]) => {
  localStorage.setItem(POKEMON_KEY_IN_LOCAL_STORAGE, JSON.stringify(pokemon));
};
