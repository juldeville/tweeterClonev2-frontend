"use client";
import React from "react";
import { TagData } from "@/types";
import { useRouter } from "next/navigation";

export const TrendCard = ({ tag, tweets, _id }: TagData) => {
  const router = useRouter();
  const handleClick = (): void => {
    router.push(`/hashtag/${_id}`);
  };
  return (
    <div className="flex flex-col gap-2 bg-base-200 p-6 cursor-pointer" onClick={handleClick}>
      <div className="text-lg text-accent  font-bold">#{tag}</div>
      <div className="text-secondary">{tweets.length} tweets</div>
    </div>
  );
};
