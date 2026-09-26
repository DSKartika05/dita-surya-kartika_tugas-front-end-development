import "./globals.css";

import localFont from "next/font/local";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { UserProvider } from "@/context/UserContext";
import { FavoriteProvider } from "@/context/FavoriteContext";
import BackToTop from "@/components/BackToTop";

const fontSans = localFont({
  src: [
    {
      path: "./fonts/PlusJakartaSans-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-Italic-Variable.woff2",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Userly — User Directory & Favorites",
  description:
    "Explore users and save your favorite profiles with Userly.",
};

export default function RootLayout({ children }) { 
  return ( <html
  lang="en"
  className={fontSans.variable}
  suppressHydrationWarning> 
  <body className="flex min-h-screen flex-col bg-background text-foreground antialiased"> 
    <UserProvider> <FavoriteProvider> 
      <Navbar /> <main className="flex-1"> {children} </main> 
      <BackToTop /> <Footer /> </FavoriteProvider> </UserProvider> 
      </body> 
      </html>
  );
}