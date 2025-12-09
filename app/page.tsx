// app/page.tsx (Server Component)
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const role = cookieStore.get("role")?.value;

  console.log("Home Page - Token:", token);
  console.log("Home Page - Role:", role);

  if (!token) redirect("/login?role=rider");
  if (role === "rider") redirect("/rider");
  if (role === "captain") redirect("/captain");

  return null;
}
