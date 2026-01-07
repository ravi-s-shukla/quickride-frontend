/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { createSocket } from "@/lib/create-socket";

const CaptainSocketContext = createContext<Socket | null>(null);

export const useCaptainSocket = () => useContext(CaptainSocketContext);

export default function CaptainSocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const s = createSocket("captain");
    setSocket(s);

    s.on("connect", () => {
      console.log("🟢 Captain socket connected:", s.id);
    });

    return () => {
      s.disconnect();
      console.log("🔴 Captain socket disconnected");
    };
  }, []);

  return (
    <CaptainSocketContext.Provider value={socket}>
      {children}
    </CaptainSocketContext.Provider>
  );
}
