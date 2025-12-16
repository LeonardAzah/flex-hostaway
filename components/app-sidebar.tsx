"use client";

import React, { ComponentType, SVGProps } from "react";
import { Home, Stone, Settings, HandHelping } from "lucide-react";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import { useIsActive } from "@/utils/helper";

const mainItems = [
  { title: "Home", url: "/dashboard", icon: Home },
  { title: "Properties", url: "/properties", icon: Stone },
];
const footerItems = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Support", url: "/support", icon: HandHelping },
];

function MenuLink({
  href,
  Icon,
  title,
}: {
  href?: string;
  // Icon?: any;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
}) {
  const active = useIsActive(href);

  const iconClass = active
    ? "size-4 text-primary"
    : "size-4 text-muted-foreground";

  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton
        asChild
        isActive={active}
        tooltip={{
          children: title,
          className: "text-white py-2 rounded-sm text-xs bg-muted-foreground",
        }}
      >
        <a
          href={href || "#"}
          className="flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors hover:bg-muted"
          aria-current={active ? "page" : undefined}
        >
          {Icon ? <Icon className={iconClass} /> : null}
          <span
            className={cn(
              "truncate",
              active ? "text-primary" : "text-foreground"
            )}
          >
            {title}
          </span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export function AppSidebar() {
  return (
    // shrink width when collapsed (adjust to match your layout tokens)
    <Sidebar className={`flex flex-col transition-all duration-150`}>
      <SidebarHeader className="text-2xl font-bold py-6 px-6">
        Flex Review Dashbaord
      </SidebarHeader>
      <SidebarContent className="px-2">
        {/* Main navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((mainItem) => (
                // removed stray pathname prop to avoid prop leak
                <MenuLink
                  key={mainItem.title}
                  href={mainItem.url}
                  Icon={mainItem.icon}
                  title={mainItem.title}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {footerItems.map((mainItem) => (
                // removed stray pathname prop to avoid prop leak
                <MenuLink
                  key={mainItem.title}
                  href={mainItem.url}
                  Icon={mainItem.icon}
                  title={mainItem.title}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
