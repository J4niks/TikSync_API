// src/docs/schemas.js
export const schemas = {
  // ==========================
  // World
  // ==========================
  World: {
    type: "object",
    required: [
      "name",
      "uuid",
      "time",
      "storm",
      "thundering",
      "generateStructures",
      "allowAnimals",
      "allowMonsters",
      "seed",
      "dimension",
      "difficulty",
    ],
    properties: {
      name: { type: "string", example: "Mundo Fantástico" },
      uuid: { type: "string", example: "123e4567-e89b-12d3-a456-426614174000" },
      time: { type: "string", example: "1200" },
      storm: { type: "boolean", example: false },
      thundering: { type: "boolean", example: false },
      generateStructures: { type: "boolean", example: true },
      allowAnimals: { type: "boolean", example: true },
      allowMonsters: { type: "boolean", example: true },
      seed: { type: "string", example: "123456789" },
      dimension: {
        type: "string",
        enum: ["NORMAL", "NETHER", "THE_END"],
        example: "NORMAL",
      },
      difficulty: {
        type: "string",
        enum: ["PEACEFUL", "EASY", "NORMAL", "HARD"],
        example: "NORMAL",
      },
    },
  },

  // ==========================
  // ServerHealth
  // ==========================
  ServerHealth: {
    type: "object",
    required: ["cpus", "uptime", "totalMemory", "maxMemory", "freeMemory"],
    properties: {
      cpus: { type: "number", example: 4 },
      uptime: { type: "number", example: 123456 },
      totalMemory: { type: "number", example: 8192 },
      maxMemory: { type: "number", example: 16384 },
      freeMemory: { type: "number", example: 4096 },
    },
  },

  // ==========================
  // BanEntry
  // ==========================
  BanEntry: {
    type: "object",
    required: ["target", "source", "reason", "expiration"],
    properties: {
      target: { type: "string", example: "player123" },
      source: { type: "string", example: "admin" },
      reason: { type: "string", example: "Quebra de regra" },
      expiration: { type: "string", format: "date-time", example: "2026-01-03T12:00:00Z" },
    },
  },

  // ==========================
  // WhitelistedPlayer
  // ==========================
  WhitelistedPlayer: {
    type: "object",
    required: ["uuid", "name"],
    properties: {
      uuid: { type: "string", example: "123e4567-e89b-12d3-a456-426614174000" },
      name: { type: "string", example: "Jogador1" },
    },
  },

  // ==========================
  // ServerStatus
  // ==========================
  ServerStatus: {
    type: "object",
    required: ["name", "health", "motd", "version", "tps", "bukkitVersion", "bannedIps", "bannedPlayers", "whitelistedPlayers", "maxPlayers", "onlinePlayers"],
    properties: {
      name: { type: "string", example: "MeuServidor" },
      health: { $ref: "#/components/schemas/ServerHealth" },
      motd: { type: "string", example: "Bem-vindo!" },
      version: { type: "string", example: "1.19.4" },
      tps: { type: "string", example: "20" },
      bukkitVersion: { type: "string", example: "1.19.4-R0.1-SNAPSHOT" },
      bannedIps: {
        type: "array",
        items: { $ref: "#/components/schemas/BanEntry" },
      },
      bannedPlayers: {
        type: "array",
        items: { $ref: "#/components/schemas/BanEntry" },
      },
      whitelistedPlayers: {
        type: "array",
        items: { $ref: "#/components/schemas/WhitelistedPlayer" },
      },
      maxPlayers: { type: "number", example: 100 },
      onlinePlayers: { type: "number", example: 12 },
    },
  },

  // ==========================
  // ScoreboardBase
  // ==========================
  ScoreboardBase: {
    type: "object",
    properties: {
      objectives: { type: "array", items: { type: "string" } },
      entries: { type: "array", items: { type: "string" } },
      name: { type: "string" },
      displayName: { type: "string" },
      criterion: { type: "string" },
      scores: {
        type: "array",
        items: {
          type: "object",
          required: ["entry", "value"],
          properties: {
            entry: { type: "string", example: "Jogador1" },
            value: { type: "number", example: 15 },
          },
        },
      },
      displaySlot: { type: "string" },
    },
  },

  // ==========================
  // Player
  // ==========================
  Player: {
    type: "object",
    required: [
      "uuid",
      "displayName",
      "address",
      "port",
      "exhaustion",
      "exp",
      "whitelisted",
      "banned",
      "op",
      "location",
      "dimension",
      "health",
      "hunger",
      "saturation",
      "gamemode",
      "lastPlayed",
    ],
    properties: {
      uuid: { type: "string", example: "123e4567-e89b-12d3-a456-426614174000" },
      displayName: { type: "string", example: "Jogador1" },
      address: { type: "string", example: "127.0.0.1" },
      port: { type: "number", example: 25565 },
      exhaustion: { type: "number", example: 0.5 },
      exp: { type: "number", example: 10 },
      whitelisted: { type: "boolean", example: true },
      banned: { type: "boolean", example: false },
      op: { type: "boolean", example: false },
      location: {
        type: "array",
        items: { type: "number" },
        minItems: 3,
        maxItems: 3,
        example: [100, 64, 200],
      },
      dimension: { type: "string", enum: ["NORMAL", "NETHER", "THE_END"], example: "NORMAL" },
      health: { type: "number", example: 20 },
      hunger: { type: "number", example: 20 },
      saturation: { type: "number", example: 5 },
      gamemode: { type: "string", enum: ["SURVIVAL", "CREATIVE", "ADVENTURE", "SPECTATOR"], example: "SURVIVAL" },
      lastPlayed: { type: "number", example: 1670000000000 },
    },
  },
};
