import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Workout Tracker</h1>

      <div>
        {session ? (
          <p>
            You are logged in as {session?.user?.email} and have access to the
            application.
          </p>
        ) : (
          <p>
            You are not logged in and do not have access to the application.
          </p>
        )}
        <LoginButton />
      </div>
    </div>
  );
}
