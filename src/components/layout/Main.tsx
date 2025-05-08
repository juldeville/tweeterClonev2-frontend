"use client";
import React, { useEffect } from "react";
import TweetCard from "../features/TweetCard";
import TweetComposer from "../features/TweetComposer";
import { useState } from "react";
import { TweetData } from "@/types";
import { getTweets } from "@/services/tweets";
import { getTimeAgo } from "@/utils/getTimeAgo";
import { useAppSelector } from "@/hooks/reduxHooks";
export default function Main() {
  const [tweetData, setTweetData] = useState<TweetData[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user.value);
  function toggleRefresh() {
    setRefresh(!refresh);
  }
  useEffect(() => {
    (async () => {
      const data = await getTweets(user.token);
      if (data.result) {
        setTweetData(data.formattedTweets);
      }
    })();
  }, [refresh]);

  const tweets = tweetData?.map((tweet, i) => {
    const isLiked = tweet.isLiked;
    const likeCount = tweet.likes.length;
    return (
      <TweetCard
        key={i}
        firstname={tweet.user.firstname}
        username={tweet.user.username}
        createdAt={getTimeAgo(tweet.date)}
        likeCount={likeCount}
        content={tweet.content}
        id={tweet._id}
        toggleRefresh={toggleRefresh}
        isLiked={isLiked}
      />
    );
  });

  return (
    <div className=" min-h-screen border-x border-base-content flex-1">
      <TweetComposer toggleRefresh={toggleRefresh} />
      {tweets}
    </div>
  );
}
