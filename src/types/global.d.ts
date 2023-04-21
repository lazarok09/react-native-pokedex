declare interface SearchedPokemons {
  name: string;
  url: string;
}

declare interface PokemonResponse<T> {
  count: number;
  next: string;
  previus: string | null;
  results: T;
}
