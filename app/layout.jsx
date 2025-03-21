import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useUserStore } from "@/store/use-user-store";
import { Plus } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HealthDonalds",
  description: "Start eating a healthy burger",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "h-full",
        )}
      >
        <Toaster />
        <div className="m-auto flex h-screen max-w-md flex-col border-x">
          <Header />
          <main className="max-h-[calc(100%_-_100px)] flex-1 p-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
