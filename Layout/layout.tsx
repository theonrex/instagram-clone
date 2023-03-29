import React, { ReactNode } from "react";

import Navbar from "@/components/NavBar/Navbar";
import BottomNav from "../components/BottomNav/bottomNav";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <BottomNav/>
    </>
  );
}
