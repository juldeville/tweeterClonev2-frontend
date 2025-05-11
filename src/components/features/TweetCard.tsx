import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { updateLike, deleteTweet } from "@/services/tweets";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { formatTag } from "@/utils/formatTag";
import { refreshTags } from "@/reducers/tags";

interface TweetCardProps {
  firstname: string;
  username: string;
  createdAt: string;
  content: string;
  likeCount: number;
  id: string;
  isLiked: boolean;
  author: boolean;
}

export default function TweetCard({
  firstname,
  username,
  createdAt,
  content,
  likeCount,
  id,
  isLiked,
  author,
}: TweetCardProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.value);

  const formattedContent = formatTag(content);

  const handleUpdateLike = async () => {
    await updateLike({ token: user.token, tweetId: id });
    dispatch(refreshTags());
  };

  const handleDelete = async () => {
    await deleteTweet(id);
    dispatch(refreshTags());
  };

  return (
    <div className="flex flex-col gap-3 p-6 border-b border-base-content">
      <div className="flex gap-4 items-center">
        <div className=" rounded-full overflow-hidden relative w-13 h-12 bg-red-300">
          <Image src="/profile.webp" fill alt="profile" />
        </div>
        <div className="flex gap-4">
          <div className="font-bold">{firstname}</div>
          <div className="text-secondary">@{username}</div>
          <div className="text-secondary">- {createdAt}</div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="text-lg">{formattedContent}</div>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={handleUpdateLike}
            color={isLiked ? "#e64a19" : "#fffff"}
            className="cursor-pointer"
          />
          <span>{likeCount}</span>
          {author && (
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => {
                handleDelete();
              }}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}
