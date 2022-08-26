export interface CharacterAPI {
  name: string;
  birth_year: string;
  homeworld: string; // url
}

export interface Planet {
  name: string;
  terrain: string;
  population: number;
}


export interface Character {
  name: string;
  birth_year: string;
  planet: Planet;
}
