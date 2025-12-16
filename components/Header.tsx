"use client";

import { Menu, Search } from "lucide-react";

import { useIsActive } from "@/utils/helper";
import { useHelpSidebar } from "@/app/contexts/HelpSidebarContext";
import { HeaderIconButtonProps } from "@/lib/types";
import { HeaderIconButton, HelpIconButton } from "./ui/eaderIconButton";
import { useSidebar } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {
  const { toggleSidebar } = useSidebar();
  const { openHelpSidebar } = useHelpSidebar();

  const handleHelpClick = () => {
    console.log("🟢 HELP ICON CLICKED!");
    console.log("🟢 Calling openHelpSidebar...");
    openHelpSidebar();
  };

  const headerIconButtons: HeaderIconButtonProps[] = [
    {
      icon: <Search className="size-5" />, // Already size-5
      label: "Search",
      className: "flex md:hidden",
    },
  ];

  return (
    <header className=" dark:bg-[#0b1e2d] sticky top-0 left-0 bg-white z-30">
      <div className="flex items-center justify-end px-[3.8%] py-4 pb-12 w-full">
        {/* Left Section */}
        <div
          onClick={toggleSidebar}
          className="flex items-center p-1 -m-1 rounded-sm hover:bg-neutral hover:text-accent-foreground dark:hover:bg-accent/50 hover:cursor-pointer lg:hidden "
        >
          <Menu className="size-8" />
        </div>

        {/* Right Section */}
        <div className="font-semibold flex items-center gap-1 md:gap-2 justify-end">
          {/* <HelpIconButton
            className={`hidden lg:flex ${
              useIsActive("/support") ? "text-primary" : "text-foreground"
            }`}
            onClick={handleHelpClick}
          />
          {headerIconButtons.map((buttonProps, index) => (
            <HeaderIconButton key={index} {...buttonProps} />
          ))} */}
          <span className="w-full">Isong Leonard</span>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>IL</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
