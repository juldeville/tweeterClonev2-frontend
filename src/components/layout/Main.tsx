"use client";
import React, { useEffect } from "react";
import TweetCard from "../features/TweetCard";
import TweetComposer from "../features/TweetComposer";
import { useState } from "react";
import { TweetData } from "@/types";
import { getTweets } from "@/services/tweets";
import { getTimeAgo } from "@/utils/getTimeAgo";
export default function Main() {
  const [tweetData, setTweetData] = useState<TweetData[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  function toggleRefresh() {
    setRefresh(!refresh);
  }
  useEffect(() => {
    (async () => {
      const data = await getTweets();
      if (data.result) {
        setTweetData(data.tweets);
      }
    })();
  }, [refresh]);

  const tweets = tweetData.map((tweet, i) => {
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
      />
    );
  });

  return (
    <div className=" min-h-screen border-x border-base-content ">
      <TweetComposer toggleRefresh={toggleRefresh} />
      {tweets}
    </div>
  );
}
