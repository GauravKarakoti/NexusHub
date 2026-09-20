import { io, Socket } from "socket.io-client";

// TODO 1: Implement singleton pattern for Socket connection
// Ensure connection URL uses environment variables
export const initSocket = (): Socket => {
  // TODO 2: Return configured socket instance
  return io(process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000", {
    autoConnect: false,
  });
};