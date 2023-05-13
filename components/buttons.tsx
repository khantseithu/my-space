"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import Link from "next/link";

export const SignInButton = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <button disabled>Signing In...</button>;
  }
  if (status === "authenticated") {
    return (
      <Link href={"/dashboard"}>
        <Image
          width={43}
          height={43}
          src={session.user?.image ?? "/mememan.webp"}
          alt="avatar"
        />
      </Link>
    );
  }
  return <button onClick={() => signIn()}>Sign In</button>;
};

export const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign Out</button>;
};
