import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:4000";

export const createSocket = (role: "rider" | "captain") => {
  console.log("Creating socket...");
  const socket = io(SOCKET_URL, {
    withCredentials: true,
    transports: ["websocket", "polling"],
    auth: {
      role,
    },
  });

  // ✅ VERY IMPORTANT DEBUG LISTENERS
  socket.on("connect", () => {
    console.log("🟢 CONNECTED:", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.error("❌ CONNECT ERROR:", err.message);
  });

  return socket;
};
