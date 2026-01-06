import express from "express";
import cors from "cors";
import { swaggerUi, swaggerSpec } from "./docs/swagger";
import path from 'path';
// Rotas
import authRoutes from "./routes/auth.route";
import chatRoutes from "./routes/chat.routes";
import playerRoutes from "./routes/player.routes";
import serverRoutes from "./routes/server.routes";
import worldRoutes from "./routes/world.routes";
import { authMiddleware } from "./middlewares/auth.middleware";
import liveRoutes from "./live/live.routes";

const app = express();

// Habilita parsing de JSON e urlencoded para todos os verbos (inclui DELETE)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// CORS
app.use(cors((req, callback) => {
  const origin = req.header('Origin');
  const allowedOrigins = ["https://129.148.41.189:4000", "http://localhost:5173"];
  const readOnlyOrigins = ["http://129.148.41.189:4001"];

  if (!origin) {
    return callback(null, { origin: true });
  }

  if (allowedOrigins.includes(origin)) {
    callback(null, { origin: true, methods: ["GET", "POST", "PUT", "DELETE"], credentials: true });
  } else if (readOnlyOrigins.includes(origin)) {
    callback(null, { origin: true, methods: ["GET"], credentials: true });
  } else {
    callback(new Error("Not allowed by CORS"));
  }
}));

app.use(express.json());

// Rotas
app.use("/auth", authRoutes);
app.use("/server", authMiddleware, serverRoutes);
app.use("/players", authMiddleware, playerRoutes);
app.use("/chat", authMiddleware, chatRoutes);
app.use("/world", authMiddleware, worldRoutes);
app.use('/live', authMiddleware, liveRoutes);
app.use('/widgets/likes', express.static(path.join(__dirname, 'widgets/likes')));
app.use('/widgets/chat', express.static(path.join(__dirname, 'widgets/chat')));
app.use('/widgets/gifts', express.static(path.join(__dirname, 'widgets/gifts')));
app.use('/widgets/join', express.static(path.join(__dirname, 'widgets/join')));
app.use('/widgets/follow', express.static(path.join(__dirname, 'widgets/follow')));
app.use('/widgets/social', express.static(path.join(__dirname, 'widgets/social')));

export default app;
