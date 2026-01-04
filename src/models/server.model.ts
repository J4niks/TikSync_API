export interface ServerStatus {
  name: string;
  health: ServerHealth;
  motd: string;
  version: string;
  tps: string;
  bukkitVersion: string;
  bannedIps: BanEntry[];
  bannedPlayers: BanEntry[];
  whitelistedPlayers: WhitelistedPlayer[];
  maxPlayers: number;
  onlinePlayers: number;
}
// status do servidor
export interface ServerHealth {
  cpus: number;
  uptime: number;
  totalMemory: number;
  maxMemory: number;
  freeMemory: number;
}

// banimento de IP ou jogador
export interface BanEntry {
  target: string;
  source: string;
  reason: string;
  expiration: string; // ISO date string
}

// jogador na whitelist
export interface WhitelistedPlayer {
  uuid: string;
  name: string;
}
