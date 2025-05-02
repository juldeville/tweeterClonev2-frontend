import React from "react";
import TweetCard from "../features/TweetCard";
import TweetComposer from "../features/TweetComposer";

export default function Main() {
  return (
    <div className=" min-h-screen border-x border-base-content ">
      <TweetComposer />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
    </div>
  );
}
