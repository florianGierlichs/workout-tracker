import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Dashboard } from "./components/Dashboard";
import LoginButton from "./components/LoginButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "workout tracker",
  description: "My super duper fancy workout tracker",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  // session:  {
  //   user: {
  //     name: null,
  //     email: 'gierlichs@gmx.de',
  //     image: undefined,
  //     id: 'clt5sr7750000eitf414tqrcs'
  //   }
  // }

  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={inter.className + "h-full"}>
        {session ? (
          <Dashboard>{children}</Dashboard>
        ) : (
          <p>
            You are not logged in and do not have access to the application.
          </p>
        )}
        <LoginButton />
      </body>
    </html>
  );
}
