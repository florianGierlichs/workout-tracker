import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import { Dashboard } from "./components/Dashboard";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <Dashboard />
      ) : (
        <p>You are not logged in and do not have access to the application.</p>
      )}
      <LoginButton />
    </>
  );
}
