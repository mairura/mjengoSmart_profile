"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/Navbar/TopNav";
import MobileNavigation from "@/components/Navbar/Mobile";
import DesktopNavigation from "@/components/Navbar/Desktop";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  auth: any; 
  header: any; 
  children: React.ReactNode;
};

const metadata: Metadata = {
  title: "MjengoSmart",
  description: "Your reliable construction partner"
};

export default function RootLayout({ auth, header, children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <nav> */}
          <TopNav auth={auth} user={auth?.user} />
          <div className="flex">
            {/* Set `sidebarOpen` state and its setter function */}
            <DesktopNavigation user={auth?.user} >
            <MobileNavigation
              user={auth?.user}
              sidebarOpen={sidebarOpen} // Pass the state variable
              setSidebarOpen={setSidebarOpen} // Pass the state setter function
          >
            </MobileNavigation>
          </DesktopNavigation>
          {children}
          {header}
          </div>
      </body>
    </html>
  );
}
