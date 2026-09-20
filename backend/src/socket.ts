import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';

export const initializeSocket = (server: HttpServer) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket: Socket) => {
    // console.log(`User connected: ${socket.id}`);

    // TODO 1: Implement room joining logic for specific projects/workspaces
    socket.on('join_project', (projectId: string) => {
      // TODO 2: Add logic to join socket room
    });

    // TODO 3: Implement real-time task update broadcasting
    socket.on('task_updated', (data) => {
      // TODO 4: Broadcast to project room
    });

    socket.on('disconnect', () => {
      // console.log(`User disconnected: ${socket.id}`);
      // TODO 5: Handle user presence/offline status
    });
  });
};