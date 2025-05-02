import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function TweetCard() {
  return (
    <div className="flex flex-col gap-3 p-6 border-b border-base-content">
      <div className="flex gap-4 items-center">
        <div className=" rounded-full overflow-hidden relative w-13 h-12 bg-red-300">
          <Image src="/profile.webp" fill alt="profile" />
        </div>
        <div className="flex gap-4">
          <div className="font-bold">Antoine</div>
          <div className="text-secondary-content">@AntoineLeProf</div>
          <div className="text-secondary-content">- 5 hours</div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="">
          <div>
            Welcome to <span className="text-accent font-bold">#hackatweet</span> guys!
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faHeart} />
          <span>0</span>
        </div>
      </div>
    </div>
  );
}
