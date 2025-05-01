import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Menu from "../components/03-organisms/Menu";
import Footer from "../components/03-organisms/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ciotto",
  description: "Ciotto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="stylesheet" href="https://use.typekit.net/xns4hfr.css"></link>
      </head> */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-body-bg text-brown-500`}>
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
