import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  console.log(session);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return <main></main>;
}
