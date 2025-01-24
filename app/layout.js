import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

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
      <html lang="en">
        <body className={montserrat.className}>
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </>
  );
}

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="academy-info">
          <div className="logo">
            <Image src="/off_logo.webp" alt="ottawa stars soccer academy logo" fill priority />
          </div>
        </div>
      </div>
    </footer>
  );
};
