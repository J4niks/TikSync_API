import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { Server as SocketIOServer } from 'socket.io';

import app from './app';
import { setupLiveSocket } from './ws/live.socket';

// ⚠️ Importa o LiveService apenas para registrar os listeners no EventBus
import './live/live.service';

dotenv.config();

const PORT = process.env.PORT;

// ==========================
// Configuração do SSL
// ==========================
const sslOptions = {
  key: fs.readFileSync(path.resolve(__dirname, '../certs/server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, '../certs/server.crt')),
};

// ==========================
// Cria servidor HTTPS
// ==========================
export const server = https.createServer(sslOptions, app);
export const httpServer = http.createServer(app);

// ==========================
// Inicializa Socket.IO
// ==========================
const io = new SocketIOServer(server, {
  cors: {
    origin: '*', // OBS Browser Source precisa disso
    methods: ['GET', 'POST'],
  },
});
io.attach(httpServer);

// ==========================
// Conecta EventBus → WebSocket
// ==========================
setupLiveSocket(io);

// ==========================
// Start do servidor
// ==========================
server.listen(PORT, () => {
  console.log(`🚀 API rodando em https://129.148.41.189:${PORT}`);
  console.log(`📡 WebSocket ativo para widgets OBS`);
});

httpServer.listen(4001, () => {
  console.log(`🔓 Servidor HTTP (OBS) rodando em http://localhost:4001`);
});