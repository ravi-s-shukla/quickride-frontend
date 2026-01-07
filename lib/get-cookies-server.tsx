import { cookies } from "next/headers";

export async function getAuthFromCookies() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value || null;
  const role = cookieStore.get("role")?.value || null;

  return {
    token,
    role,
  };
}
