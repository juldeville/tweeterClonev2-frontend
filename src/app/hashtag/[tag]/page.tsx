"use client";
import React from "react";
import { useParams } from "next/navigation";
import HashtagView from "@/components/layout/HashtagView";
import ThemeWrapper from "@/components/ui/ThemeWrapper";
import SideBar from "@/components/layout/SideBar";
import Trends from "@/components/layout/Trends";
export default function Tag() {
  const params = useParams<{ tag: string }>();
  return (
    <div>
      <ThemeWrapper>
        <div className="flex h-screen w-full">
          <div className="w-1/5">
            <SideBar />
          </div>
          <div className="flex-1 overflow-y-auto border-x border-base-content">
            <HashtagView tagId={params.tag} />
          </div>
          <div className="w-1/4">
            <Trends />
          </div>
        </div>
      </ThemeWrapper>
    </div>
  );
}
