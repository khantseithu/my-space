import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  const { targetUserId } = await req.json();

  const curretUserId = await prisma.user
    .findUnique({
      where: { email: currentUserEmail },
    })
    .then((user) => user?.id!);

  const follow = await prisma.follows.create({
    data: {
      followerId: curretUserId,
      followingId: targetUserId,
    },
  });
  return NextResponse.json(follow);
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  const targetUserId = req.nextUrl.searchParams.get("targetUserId");

  const curretUserId = await prisma.user
    .findUnique({
      where: { email: currentUserEmail },
    })
    .then((user) => user?.id!);

  const follow = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: curretUserId,
        followingId: targetUserId!,
      },
    },
  });
  return NextResponse.json(follow);
}
