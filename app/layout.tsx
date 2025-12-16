import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HelpSidebarProvider } from "./contexts/HelpSidebarContext";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flex dashboard",
  description: "Reviews dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultOpen = true;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HelpSidebarProvider>
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />

            <main className="w-full">
              <div className="w-full">
                <Header />
              </div>
              <div className=" px-[4%] py-6">{children}</div>
            </main>
          </SidebarProvider>
        </HelpSidebarProvider>
      </body>
    </html>
  );
}
