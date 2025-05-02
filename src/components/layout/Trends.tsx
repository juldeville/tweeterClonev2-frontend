import React from "react";
import { TrendCard } from "../features/TrendCard";
export default function Trends() {
  return (
    <div className=" w-1/4 py-4 px-15 flex flex-col gap-4">
      <h1 className=" font-bold text-2xl">Trends</h1>
      <div className="rounded-xl overflow-hidden">
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </div>
    </div>
  );
}
