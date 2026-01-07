// export default async function Home() {
//   return null;
// }

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/ride");
}
