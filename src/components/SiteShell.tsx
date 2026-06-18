"use client";

import { ReactNode } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { FloatingActions } from "./FloatingActions";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ThemeProvider } from "./ThemeProvider";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white text-dark">
        {/* <AnnouncementBar /> */}
        <Navbar />
        {children}
        <Footer />
        <FloatingActions />
      </div>
    </ThemeProvider>
  );
}
