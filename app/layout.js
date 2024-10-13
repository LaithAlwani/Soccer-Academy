import { Montserrat } from "next/font/google";
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

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Ottawa Stars Soccer Academy",
    default: "Ottawa Stars Soccer Academy", // a default is required when creating a template
  },
  description:
    "Ottawa Stars Soccer Academy offers professional soccer training for kids ages 5-12. Led by experienced coaches, we focus on skill development and teamwork.",
  keywords: [
    "Ottawa soccer academy",
    "soccer practice",
    "youth soccer",
    "soccer training",
    "kids soccer",
    "U7 soccer",
    "U9 soccer",
    "U11 soccer",
    "soccer registration",
    "youth development",
    " Ottawa soccer for kids",
  ],
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
  openGraph: {
    title: "Ottawa Stars Soccer Academy | Soccer Training for Kids Ages 5-12",
    description:
      "Join Ottawa Stars Soccer Academy and give your child the opportunity to develop soccer skills, teamwork, and sportsmanship under the guidance of Coach Rafed.",
    url: "https://www.ottawastars.com",
    image: "https://www.ottawastars.com/og-image.png",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <GoogleAnalytics />
          <body className={montserrat.className}>
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
    </>
  );
}

const Footer = () => {
  const size = 22;
  return (
    <footer>
      <div className="footer-container">
        <div className="academy-info">
          <div className="logo">
            <Image src="/off_logo.webp" alt="ottawa stars soccer academy logo" fill priority />
          </div>
          <span>&copy; Ottawa ON. 2024</span>
          <a href="mailto:admin@ottawastars.com">admin@ottawastars.com</a>
        </div>
        <ul className="nav">
          <li>
            <Link href="/terms">Terms of Service</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/admin">admin login</Link>
          </li>
        </ul>
        <div className="social-links">
          <a
            href="https://www.instagram.com/ottawa_stars/"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram size={size} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61564830781676"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookF size={size} />
          </a>
        </div>
      </div>
    </footer>
  );
};
