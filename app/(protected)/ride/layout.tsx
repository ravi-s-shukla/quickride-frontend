import { getAuthFromCookies } from "@/lib/get-cookies-server";
import RiderSocketProvider from "@/providers/rider-socket-provider";
import { redirect } from "next/navigation";

export default async function RideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role } = await getAuthFromCookies();

  if (role !== "rider") {
    redirect("/login?role=rider");
  }

  return <RiderSocketProvider>{children}</RiderSocketProvider>;
}
