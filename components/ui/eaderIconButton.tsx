"use client";

import { useState } from "react";
import { Button } from "./button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HeaderIconButtonProps } from "@/lib/types";

export function HeaderIconButton({
  icon,
  label,
  popoverContent,
  handleClick,
  className = "",
  buttonRef,
  isOpen,
  onOpenChange,
}: HeaderIconButtonProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  // Use controlled state if provided, otherwise use internal state
  const open = isOpen !== undefined ? isOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;

  if (handleClick) {
    return (
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        className={`rounded-sm ${className}`}
        onClick={handleClick}
        aria-label={label}
      >
        {icon}
      </Button>
    );
  }

  if (popoverContent) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={buttonRef}
            variant="ghost"
            size="icon"
            className={`rounded-sm ${className}`}
            aria-label={label}
          >
            {icon}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 border-none bg-transparent"
          align="start" // Changed from "end" to "start" to shift left
          sideOffset={9}
        >
          {popoverContent}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`rounded-sm ${className}`}
      aria-label={label}
    >
      {icon}
    </Button>
  );
}

export function HelpIconButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`rounded-sm ${className}`}
      onClick={onClick}
      aria-label="Help"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
      >
        <path
          d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.06006 6.00004C6.21679 5.55449 6.52616 5.17876 6.93336 4.93946C7.34056 4.70017 7.81932 4.61267 8.28484 4.69252C8.75036 4.77236 9.1726 5.01438 9.47678 5.37571C9.78095 5.73704 9.94743 6.19439 9.94673 6.66671C9.94673 8.00004 7.94673 8.66671 7.94673 8.66671"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11.3334H8.00667"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}
