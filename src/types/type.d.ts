interface PokedexType {
  damage_relations: DamageRelations;
  game_indices: GameIndex[];
  generation: Generation;
  id: number;
  move_damage_class: Generation;
  moves: Generation[];
  name: string;
  names: Name[];
  past_damage_relations: PastDamageRelation[];
  pokemon: Pokemon[];
}

interface DamageRelations {
  double_damage_from: Generation[];
  double_damage_to: Generation[];
  half_damage_from: Generation[];
  half_damage_to: Generation[];
  no_damage_from: any[];
  no_damage_to: any[];
}

interface Generation {
  name: PokemonTypes;
  url: string;
}

interface GameIndex {
  game_index: number;
  generation: Generation;
}

interface Name {
  language: Generation;
  name: string;
}

interface PastDamageRelation {
  damage_relations: DamageRelations;
  generation: Generation;
}

interface Pokemon {
  pokemon: Generation;
  slot: number;
}
