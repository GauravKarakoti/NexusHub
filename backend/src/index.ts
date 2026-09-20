import express, { type Application } from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeSocket } from './socket.js';
// TODO 1: Implement and import centralized routes

dotenv.config();

const app: Application = express();
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());

// TODO 2: Attach API routes

// Initialize WebSockets
initializeSocket(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 NexusHub Backend running on port ${PORT}`);
});