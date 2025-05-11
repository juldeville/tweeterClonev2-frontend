"use client";
import React from "react";
import { useState } from "react";
import { createTweet } from "@/services/tweets";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { extractTag } from "@/utils/extractTag";
import { refreshTags } from "@/reducers/tags";

export default function TweetComposer() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.value);

  const [textArea, setTextArea] = useState<string>("");

  const handleSubmit = async () => {
    const tag = extractTag(textArea);
    await createTweet({ token: user.token, content: textArea, ...(tag && { tag }) });
    dispatch(refreshTags());
  };

  return (
    <div className="w-full flex justify-center  py-4 flex-col  border-b border-base-content">
      <h1 className="ml-15 font-bold text-2xl">Home</h1>
      <div className="w-full flex justify-center items-center py-14 flex-col gap-4">
        <textarea
          className="textarea  p-4 w-3/4"
          placeholder="What's up?"
          onChange={(e) => setTextArea(e.target.value)}
          value={textArea}
        ></textarea>
        <div className="w-3/4 flex justify-end items-center gap-4">
          <span>0/280</span>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
