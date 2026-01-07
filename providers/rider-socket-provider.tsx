/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { createSocket } from "@/lib/create-socket";

const RiderSocketContext = createContext<Socket | null>(null);

export const useRiderSocket = () => useContext(RiderSocketContext);

export default function RiderSocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const s = createSocket("rider");
    setSocket(s);

    s.on("connect", () => {
      console.log("🟢 Rider socket connected:", s.id);
    });

    return () => {
      s.disconnect();
      console.log("🔴 Rider socket disconnected");
    };
  }, []);

  return (
    <RiderSocketContext.Provider value={socket}>
      {children}
    </RiderSocketContext.Provider>
  );
}
