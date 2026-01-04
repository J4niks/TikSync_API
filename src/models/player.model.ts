export type Dimension = "NORMAL" | "NETHER" | "THE_END";
export type GameMode = "SURVIVAL" | "CREATIVE" | "ADVENTURE" | "SPECTATOR";

export interface Player {
  uuid: string;
  displayName: string;
  address: string;
  port: number;

  exhaustion: number;
  exp: number;

  whitelisted: boolean;
  banned: boolean;
  op: boolean;

  location: [number, number, number]; // x, y, z
  dimension: Dimension;

  health: number;
  hunger: number;
  saturation: number;

  gamemode: GameMode;
  lastPlayed: number; // timestamp (ms)
}