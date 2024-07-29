import type { Metadata } from "next";
import {
  Philosopher as FontSerif,
  Work_Sans as FontSans,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});
const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Martinette",
  description: "Martinette writes books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          fontSerif.variable,
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
