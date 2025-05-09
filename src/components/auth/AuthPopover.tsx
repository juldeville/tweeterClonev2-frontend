import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";

interface AuthPopoverProps {
  trigger: React.ReactNode;
}

export default function AuthPopover({ trigger }: AuthPopoverProps) {
  return (
    <Popover placement="top-start" showArrow={true} offset={20}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
