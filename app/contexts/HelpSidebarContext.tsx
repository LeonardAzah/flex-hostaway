"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface HelpSidebarContextType {
  isHelpSidebarOpen: boolean;
  toggleHelpSidebar: () => void;
  openHelpSidebar: () => void;
  closeHelpSidebar: () => void;
}

const HelpSidebarContext = createContext<HelpSidebarContextType | undefined>(
  undefined
);

export function HelpSidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHelpSidebarOpen, setIsHelpSidebarOpen] = useState(false);

  useEffect(() => {
    if (isHelpSidebarOpen) {
      document.body.classList.add("help-sidebar-open");
    } else {
      document.body.classList.remove("help-sidebar-open");
    }
  }, [isHelpSidebarOpen]);

  const toggleHelpSidebar = () => {
    setIsHelpSidebarOpen((prev) => !prev);
  };

  const openHelpSidebar = () => {
    setIsHelpSidebarOpen(true);
  };

  const closeHelpSidebar = () => {
    setIsHelpSidebarOpen(false);
  };

  return (
    <HelpSidebarContext.Provider
      value={{
        isHelpSidebarOpen,
        toggleHelpSidebar,
        openHelpSidebar,
        closeHelpSidebar,
      }}
    >
      {children}
    </HelpSidebarContext.Provider>
  );
}

export function useHelpSidebar() {
  const context = useContext(HelpSidebarContext);
  if (context === undefined) {
    throw new Error("useHelpSidebar must be used within a HelpSidebarProvider");
  }
  return context;
}
