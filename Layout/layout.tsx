import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import BottomNav from "../components/BottomNav/bottomNav";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome to the best social media platform."
        />
       
        <link rel="shortcut icon" href="/favicon.png" />
        <title>  Instagram</title>
      </Head>
      <Navbar />
      {children}
      <BottomNav />
    </>
  );
}
