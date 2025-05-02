import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function SideBar() {
  return (
    <div className="w-1/5 flex flex-col py-10 justify-between items-start px-6">
      <FontAwesomeIcon icon={faTwitter} className="text-8xl rotate-180" />
      <div className=" flex gap-4">
        <div className="inline rounded-full overflow-hidden relative w-13 h-12">
          <Image src="/profile.webp" fill alt="profile" />
        </div>
        <div>
          <div>John</div>
          <div>@JohnCena</div>
        </div>
      </div>
    </div>
  );
}
