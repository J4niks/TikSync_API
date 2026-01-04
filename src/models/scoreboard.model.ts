export interface ScoreboardBase {
  objectives?: string[];
  entries?: string[];
  name?: string;
  displayName?: string;
  criterion?: string;
  scores?: { entry: string; value: number }[];
  displaySlot?: string;
}