import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
    <html lang="en" className="h-full overflow-hidden">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "h-full overflow-hidden antialiased",
        )}
      >
        <Toaster />
        <div className="m-auto flex h-screen max-w-md flex-col border-x">
          <Header />
          {/* Assure que `main` puisse défiler sans affecter le reste */}
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
