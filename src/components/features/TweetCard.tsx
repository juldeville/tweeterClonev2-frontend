import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { updateLike } from "@/services/tweets";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useState } from "react";
interface TweetCardProps {
  firstname: string;
  username: string;
  createdAt: string;
  content: string;
  likeCount: number;
  id: string;
  toggleRefresh: () => void;
  isLiked: boolean;
}

export default function TweetCard({
  firstname,
  username,
  createdAt,
  content,
  likeCount,
  id,
  toggleRefresh,
  isLiked,
}: TweetCardProps) {
  const user = useAppSelector((state) => state.user.value);

  const handleUpdateLike = async () => {
    await updateLike({ token: user.token, tweetId: id });
    toggleRefresh();
  };

  return (
    <div className="flex flex-col gap-3 p-6 border-b border-base-content">
      <div className="flex gap-4 items-center">
        <div className=" rounded-full overflow-hidden relative w-13 h-12 bg-red-300">
          <Image src="/profile.webp" fill alt="profile" />
        </div>
        <div className="flex gap-4">
          <div className="font-bold">{firstname}</div>
          <div className="text-secondary-content">@{username}</div>
          <div className="text-secondary-content">- {createdAt}</div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="">
          <div>{content}</div>
        </div>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={handleUpdateLike}
            color={isLiked ? "#e64a19" : "#fffff"}
            className="cursor-pointer"
          />
          <span>{likeCount}</span>
        </div>
      </div>
    </div>
  );
}
