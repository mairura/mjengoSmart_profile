"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/Navbar/TopNav";
import MobileNavigation from "@/components/Navbar/Mobile";
import DesktopNavigation from "@/components/Navbar/Desktop";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "MjengoSmart",
  description: "Your reliable construction partner"
};
// you will auth and add its type on the below
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* below is the part taht be a shared layout, uncoment it and play with it  */}
        {/* <nav>
          <TopNav auth={auth} user={auth?.user} />
          <div className="flex">
            <MobileNavigation
              user={auth?.user}
              sidebarOpen={false}
              setSidebarOpen={() => {}}
            />

            <DesktopNavigation user={auth?.user} />
          </div>
        </nav> */}

        {children}
      </body>
    </html>
  );
}
