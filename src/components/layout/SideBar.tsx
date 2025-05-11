import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@/hooks/reduxHooks";
import AuthPopover from "../auth/AuthPopover";
import ThemePopover from "../ui/ThemePopover";
import { div } from "framer-motion/client";

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
    <div className=" flex flex-col py-10 justify-between items-start px-10 h-full">
      <FontAwesomeIcon icon={faTwitter} className="text-8xl rotate-180 px-4" />
      <div className=" flex justify-between w-full gap-4  items-center ">
        <div className="flex gap-4  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101 hover:bg-info-content px-6 py-2 rounded-2xl">
          <div className="inline rounded-full overflow-hidden relative w-13 h-12">
            <Image src="/profile.webp" fill alt="profile" />
          </div>
          <AuthPopover trigger={userSection} username={user.username} />
        </div>
        <ThemePopover
          trigger={
            <div>
              <FontAwesomeIcon icon={faGear} size="xl" className=" px-6 py-2 cursor-pointer border-none" />
            </div>
          }
        />
      </div>
    </div>
  );
}
