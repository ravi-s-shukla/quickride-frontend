'use client';
import { useRiderSocket } from "@/providers/rider-socket-provider";

export default function RidePage() {
  const socket = useRiderSocket();
  
  return (
    <>
      Rider Dashboard is under construction.
    </>
  );
}