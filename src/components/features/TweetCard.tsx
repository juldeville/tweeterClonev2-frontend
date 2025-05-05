import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface TweetCardProps {
  firstname: string;
  username: string;
  createdAt: string;
  content: string;
  likeCount: number;
}

export default function TweetCard({
  firstname,
  username,
  createdAt,
  content,
  likeCount,
}: TweetCardProps) {
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
          <FontAwesomeIcon icon={faHeart} />
          <span>{likeCount}</span>
        </div>
      </div>
    </div>
  );
}
