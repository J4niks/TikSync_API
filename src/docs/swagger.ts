import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { schemas } from "./schemas";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "serverTap API",
      version: "1.0.0",
    },
    components: {
      schemas,
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/*.ts"], // ajuste se usar .ts
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };