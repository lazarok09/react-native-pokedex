declare interface Pokemon {
  id: number;
  name: string;
}

declare interface PokemonResponse<T> {
  count: number;
  next: string;
  previus: string | null;
  results: T;
}
