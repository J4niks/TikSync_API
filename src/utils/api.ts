import 'dotenv/config';
import axios from "axios";
import https from "https";

export const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "key": process.env.API_KEY,
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // permite conexão mesmo sem certificado válido
  }),
});