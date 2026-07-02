import type { Metadata } from "next";
import "./globals.css";
import {
  caveat,
  dmSans,
  fraunces,
  jetBrainsMono,
  patrickHand,
} from "./src/lib/fonts";

export const metadata: Metadata = {
  title: "Andrea Turek",
  description:
    "Software engineer interested in math, data, optimization, and creative systems.",
  icons: {
    icon: "/starlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${dmSans.variable} ${fraunces.variable} ${patrickHand.variable} ${jetBrainsMono.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
