"use client";
import Main from "@/components/layout/Main";
import SideBar from "@/components/layout/SideBar";
import Trends from "@/components/layout/Trends";
import ThemeWrapper from "@/components/ui/ThemeWrapper";

export default function Home() {
  return (
    <ThemeWrapper>
      <div className="flex h-screen w-full">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="flex-1 overflow-y-auto border-x border-base-content">
          <Main />
        </div>
        <div className="w-1/4">
          <Trends />
        </div>
      </div>
    </ThemeWrapper>
  );
}
