"use client";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.theme.value);
  console.log("hatoun is", theme);
  return (
    <div data-theme={theme} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
    </div>
  );
}
