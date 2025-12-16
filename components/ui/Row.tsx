import { RowProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Row = ({
  children,
  onClick,
  leftIcon,
  rightIcon,
  active,
  className,
  textClass,
}: RowProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs hover:bg-muted hover:cursor-pointer",
      active && "bg-muted",
      className
    )}
  >
    {leftIcon}
    <span className={`flex-1 text-left ${textClass}`}>{children}</span>
    {rightIcon}
  </button>
);
