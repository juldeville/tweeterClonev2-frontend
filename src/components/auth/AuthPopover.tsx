"use client";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { logOut } from "@/reducers/user";
interface AuthPopoverProps {
  trigger: React.ReactNode;
  username: string;
}

export default function AuthPopover({ trigger, username }: AuthPopoverProps) {
  const dispatch = useAppDispatch();
  return (
    <Popover placement="top-start" showArrow={true} offset={30} className="bg-base-200 rounded">
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>
        <div className="px-4 py-3 cursor-pointer">
          <div className="text-tiny" onClick={() => dispatch(logOut())}>
            Log out <span className="font-bold">@{username}</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
