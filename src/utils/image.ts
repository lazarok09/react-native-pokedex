export function getPokemonImageSRC(pokemon: Pokedex): string {
  if (Object.keys(pokemon).length > 0) {
    const hasABetterImage =
      !!pokemon?.sprites?.other?.['official-artwork']?.front_default?.length;

    if (hasABetterImage) {
      return pokemon.sprites.other?.['official-artwork'].front_default || '';
    }
  }

  return pokemon?.sprites?.back_default || '';
}
