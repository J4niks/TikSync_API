export type Dimension = "NORMAL" | "NETHER" | "THE_END";
export type Difficulty = "PEACEFUL" | "EASY" | "NORMAL" | "HARD";

export interface World {

  name: string;
  uuid: string;
  time: string;
  storm: boolean;
  thundering: boolean;
  generateStructures: boolean;
  allowAnimals: boolean;
  allowMonsters: boolean;
  seed: string
  
  dimension: Dimension;
  difficulty: Difficulty;

}