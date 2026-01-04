import express from 'express';
import cors from 'cors';

// Rotas
import authRoutes from './routes/auth.route';
import chatRoutes from './routes/chat.routes';
import playerRoutes from './routes/player.routes';
import serverRoutes from './routes/server.routes';
import worldRoutes from './routes/world.routes';
import { authMiddleware } from './middlewares/auth.middleware';

const app = express();

// Configuração do CORS
const allowedOrigins = ['https://meusite.vercel.app', 'https://meusite.git.io'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/auth', authRoutes);
app.use('/server',authMiddleware, serverRoutes);
app.use('/players',authMiddleware, playerRoutes);
app.use('/chat',authMiddleware, chatRoutes);
app.use('/world',authMiddleware, worldRoutes);

export default app;