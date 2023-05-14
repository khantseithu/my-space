import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface FollowClientProps {
  targetUserId: string;
  isFollowing: boolean;
}

function FollowClient({ targetUserId, isFollowing }: FollowClientProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutaitng = isPending || isFetching;

  const follow = async () => {
    setIsFetching(true);
    const res = await fetch(`/api/follow`, {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsFetching(false);
    console.log(res);

    startTransition(() => {
      router.refresh();
    });
  };

  const unfollow = async () => {
    setIsFetching(true);
    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });
    setIsFetching(false);
    console.log(res);

    startTransition(() => {
      router.refresh();
    });
  };

  if (isFollowing) {
    return <button>{!isMutaitng ? "Unfollow" : "Loading..."}</button>;
  } else {
    return <button>{!isMutaitng ? "Follow" : "Loading..."}</button>;
  }
}
export default FollowClient;
