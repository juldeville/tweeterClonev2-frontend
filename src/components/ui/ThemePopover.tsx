"use client";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import { allThemes } from "@/constants/allThemes";
import ThemeCard from "./ThemeCard";
interface ThemePopoverProps {
  trigger: React.ReactNode;
}

const themes = allThemes.map((element, i) => {
  return <ThemeCard theme={element} key={i} />;
});

export default function ThemePopover({ trigger }: ThemePopoverProps) {
  return (
    <Popover placement="top-end" showArrow={true} offset={30} className="bg-base-200 rounded">
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>
        <div className=" py-3 cursor-pointer  overflow-y-auto ">
          <div className="text-tiny" onClick={() => {}}>
            <div className="text-secondary mb-4 px-4">Choose a theme:</div>
            <div className="flex flex-col  gap-6 overflow-y-auto overflow-x-hidden h-96">{themes}</div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
