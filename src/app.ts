import express from "express";
import cors from "cors";
import { swaggerUi, swaggerSpec } from "./docs/swagger";

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
const allowedOrigins = ["https://129.148.41.189:4000", "http://localhost:5173" , "https://localhost:4000"];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// Rotas
app.use("/auth", authRoutes);
app.use("/server", authMiddleware, serverRoutes);
app.use("/players", authMiddleware, playerRoutes);
app.use("/chat", authMiddleware, chatRoutes);
app.use("/world", authMiddleware, worldRoutes);
app.use('/live', authMiddleware, liveRoutes);

export default app;
