"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ToolIconProps {
  toolName: string;
  toolIMG: string;
}

export function ToolIcon({ toolName, toolIMG }: ToolIconProps) {
  return (
    <>
      <div className="flex">
        <div>
          <Avatar className="h-6 w-6 text-black">
            <AvatarImage src={toolIMG} />
            {toolName}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>{toolName}</div>
      </div>
    </>
  );
}
