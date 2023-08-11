import Image from "next/image";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "./components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <div className="bg-black">
          <div className="container h-screen w-screen m-auto">
            <div className="h-full flex items-start justify-center">
              <h1 className="text-white text-5xl mt-32">
                They Are Taking The Hobbits To Isengard
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
