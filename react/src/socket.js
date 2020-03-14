import io from "socket.io-client";

const socket = io("http://localhost:8000", {
  reconnectionDelay: 1000,
  reconnection: true,
  transports: ["polling", "websocket"],
  upgrade: true,
  rejectUnauthorized: false
});

export { socket };
