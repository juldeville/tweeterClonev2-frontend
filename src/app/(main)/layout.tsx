"use client";

import SideBar from "@/components/layout/SideBar";
import Trends from "@/components/layout/Trends";
import { useEffect } from "react";
import { useAppSelector } from "@/hooks/reduxHooks";
import { redirect } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const token = useAppSelector((state) => state.user.value.token);
  !token && redirect("/auth");
  useEffect(() => {}, []);

  return (
    <div className="flex min-h-screen w-full">
      <SideBar />
      <main className="flex-1">{children}</main>
      <Trends />
    </div>
  );
}
