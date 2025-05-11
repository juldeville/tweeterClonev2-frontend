import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useAppSelector } from "@/hooks/reduxHooks";
import AuthPopover from "../auth/AuthPopover";

export default function SideBar() {
  const user = useAppSelector((state) => state.user.value);
  const userSection = (
    <div className="cursor-pointer flex gap-4 items-center">
      <div>
        <div className="font-bold">{user.firstname}</div>
        <div>@{user.username}</div>
      </div>
      <span className="font-bold">...</span>
    </div>
  );
  return (
    <div className=" flex flex-col py-10 justify-between items-start px-6 h-full">
      <FontAwesomeIcon icon={faTwitter} className="text-8xl rotate-180 px-4" />
      <div className=" flex gap-4 px-6 py-2 rounded-2xl items-center  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101 hover:bg-info-content">
        <div className="inline rounded-full overflow-hidden relative w-13 h-12">
          <Image src="/profile.webp" fill alt="profile" />
        </div>
        <AuthPopover trigger={userSection} username={user.username} />
      </div>
    </div>
  );
}
