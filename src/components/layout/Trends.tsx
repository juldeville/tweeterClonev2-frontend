import React, { useState } from "react";
import { TrendCard } from "../features/TrendCard";
import { useEffect } from "react";
import { getTags } from "@/services/tags";
import { TagData } from "@/types";
import { useAppSelector } from "@/hooks/reduxHooks";
export default function Trends() {
  const reload = useAppSelector((state) => state.tags);
  const [tagData, setTagData] = useState<TagData[]>([]);
  useEffect(() => {
    (async () => {
      const apiResponse = await getTags();
      setTagData(apiResponse);
    })();
  }, [reload]);

  const tags = tagData.map((data, index) => {
    return <TrendCard tag={data.tag} tweets={data.tweets} key={index} />;
  });
  return (
    <div className=" h-screen sticky top-0 w-full py-4 px-15 flex flex-col gap-4 ">
      <h1 className=" font-bold text-2xl">Trends</h1>
      <div className="rounded-xl overflow-hidden">{tags}</div>
    </div>
  );
}
