import "./globals.css";

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";


const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "DashStack",
  description: "An dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
