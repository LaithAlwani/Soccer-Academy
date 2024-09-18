import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";

import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import Image from "next/image";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ottawa Stars Soccer Academy",
  description:
    "A youth soccer development located in Ottawa ON. serveing the Barrhaven/Riverside South community",
  keywords: ["soccer", "ottawa", "youth development", "Barrhaven", "Riverside South", "Greeely"],
  authors: [
    {
      name: "Laith Alwani",
      url: "https://www.laithalwani.ca",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "/off_logo.png" },
    { rel: "icon", url: "/off_logo.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <GoogleAnalytics />
        <body className={inter.className}>
          <main>
            <Toaster />
            <Navbar />
            <Suspense fallback={<Loading />}>
              {children}
              <Analytics />
              <SpeedInsights />
            </Suspense>
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

const Footer = () => {
  const size = 22;
  return (
    <footer>
      <div className="footer-container">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="logo">
            <Image src="/off_logo.png" alt="ottawa stars soccer academy logo" fill priority />
          </div>
          <span>&copy; Ottawa ON. 2024</span>
          <span>admin@ottawastars.com</span>
          <Link href="/admin">admin login</Link>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/ottawa_stars/" target="_blank">
            <FaInstagram size={size} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61564830781676" target="_blank">
            <FaFacebookF size={size} />
          </a>
        </div>
      </div>
    </footer>
  );
};
