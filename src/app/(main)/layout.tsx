"use client";

import { useAppSelector } from "@/hooks/reduxHooks";
import { redirect } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const token = useAppSelector((state) => state.user.value.token);
  !token && redirect("/auth");

  return (
    <div>
      <main className="flex-1">{children}</main>
    </div>
  );
}
