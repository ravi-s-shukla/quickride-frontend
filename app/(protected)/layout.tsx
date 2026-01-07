import { redirect } from "next/navigation";
import Navbar from "../../component/Navbar";
import { Car, Info, User } from "lucide-react";
import { CaptainPayload, RiderPayload } from "../signup/page";
import { getAuthFromCookies } from "@/lib/get-cookies-server";

const apiURL = "http://localhost:8080/api";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {

  const { token, role } = await getAuthFromCookies();

  if (!token || !role) {
    redirect("/login?role=rider");
  }
  const res = await fetch(`${apiURL}/${role}/me`, {
    method: "GET",
    headers: { Cookie: `token=${token}` },
    cache: "no-store",
  });

  const result = await res.json();

  //console.log(res);
  if (!result.success) {
    redirect(`/login?role=${role}`);
  }

  const user: RiderPayload | CaptainPayload = result.data;

  if (!user) {
    redirect(`/login?role=${role}`);
  }

  return (
    <>
      <Navbar
        role={role}
        user={user}
        navItems={[
          { name: "Ride", href: "/ride", icon: <Car /> },
          { name: "Drive", href: "/drive", icon: <User /> },
          { name: "About", href: "/about", icon: <Info /> },
        ]}
      />
      <div>{children}</div>
    </>
  );
}
