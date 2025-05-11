"use client";
import React, { useEffect } from "react";
import TweetCard from "../features/TweetCard";
import TweetComposer from "../features/TweetComposer";
import { useState } from "react";
import { TweetData } from "@/types";
import { getTweets } from "@/services/tweets";
import { getTimeAgo } from "@/utils/getTimeAgo";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";

export default function Main() {
  const [tweetData, setTweetData] = useState<TweetData[]>([]);
  const user = useAppSelector((state) => state.user.value);
  const reload = useAppSelector((state) => state.tags);

  useEffect(() => {
    (async () => {
      const data = await getTweets(user.token);
      if (data.result) {
        setTweetData(data.formattedTweets);
      }
    })();
  }, [reload]);

  const tweets = tweetData?.map((tweet, i) => {
    const author = tweet.user.username === user.username;
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
        isLiked={isLiked}
        author={author}
      />
    );
  });

  return (
    <div>
      <TweetComposer />
      {tweets}
    </div>
  );
}
