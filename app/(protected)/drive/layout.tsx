import { getAuthFromCookies } from "@/lib/get-cookies-server";
import CaptainSocketProvider from "@/providers/captain-socket-provider";
import { redirect } from "next/navigation";

export default async function DriveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role } = await getAuthFromCookies();

  if (role !== "captain") {
    redirect("/login?role=captain");
  }

  return <CaptainSocketProvider>{children}</CaptainSocketProvider>;
}
