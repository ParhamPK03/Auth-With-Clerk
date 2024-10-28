import { auth, currentUser } from "@clerk/nextjs/server";
export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    return <div> you are not loged in</div>;
  }

  const user = await currentUser()

  return <div></div>;
}
