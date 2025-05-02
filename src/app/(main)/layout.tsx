import SideBar from "@/components/layout/SideBar";
import Trends from "@/components/layout/Trends";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <SideBar />
      <main className="flex-1">{children}</main>
      <Trends />
    </div>
  );
}
