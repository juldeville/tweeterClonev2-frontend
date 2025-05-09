import React from "react";
import { TagData } from "@/types";

export const TrendCard = ({ tag, tweets }: TagData) => {
  return (
    <div className="flex flex-col gap-2 bg-base-200 p-6 ">
      <div className="text-lg font-bold">#{tag}</div>
      <div className="text-base">{tweets.length} tweets</div>
    </div>
  );
};
