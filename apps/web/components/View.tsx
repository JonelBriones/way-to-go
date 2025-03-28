"use client";
import React from "react";
import Navbar from "./navbar/Navbar";
import { usePathname } from "next/navigation";

const View = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full justify-between ">
      <div className="flex flex-col h-full relative p-4">{children}</div>
      {pathname !== "/welcome" && <Navbar />}
    </div>
  );
};

export default View;
