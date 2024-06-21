"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextType {
  isOpen: boolean;
  isContentHidden: boolean;
  isOptionClick: boolean;
  toggleSidebar: () => void;
  handleClickOption: (state: any) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContentHidden, setIsContentHidden] = useState(false);
  const [isOptionClick, setIsOptionClick] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsContentHidden(!isContentHidden);
  };

  const handleClickOption = (state) => {
    setIsOptionClick(state);
    console.log(state);
  };

  /*   const toggleSidebar = () => {
    setIsOpen(!isOpen);

    if (isContentHidden) {
      setTimeout(() => {
        setIsContentHidden(false);
      }, 300);
    } else {
      setIsContentHidden(!isContentHidden);
    }
  };
 */
  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        isContentHidden,
        isOptionClick,
        toggleSidebar,
        handleClickOption,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
