import https from 'https';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 3000;

// Configuração do SSL
const sslOptions = {
  key: fs.readFileSync(path.resolve(__dirname, '../certs/server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, '../certs/server.crt')),
};

// Cria servidor HTTPS
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`API intermediária rodando em https://localhost:${PORT}`);
});