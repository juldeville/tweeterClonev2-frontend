"use client";

import Image from "next/image";
import Main from "@/components/layout/Main";
import SideBar from "@/components/layout/SideBar";
import Trends from "@/components/layout/Trends";
export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-between">
      <SideBar />
      <Main />;
      <Trends />
    </div>
  );
}
