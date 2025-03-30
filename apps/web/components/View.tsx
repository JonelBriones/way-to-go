"use client";
import React from "react";
import Navbar from "./navbar/Navbar";
import { usePathname } from "next/navigation";

const View = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full p-4 justify-between">
      {children}

      {pathname !== "/welcome" && <Navbar />}
    </div>
  );
};

export default View;
