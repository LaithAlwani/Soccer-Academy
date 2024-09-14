import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";

import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "./loading";
import ContactForm from "@/components/ContactForm";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ottawa Stars Soccer Academy",
  description:
    "A youth soccer development located in Ottawa ON. serveing the Barrhaven/Riverside South community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Toaster />
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <BackToTop />
          <Footer />
        </main>
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <footer>
      <section id="contact">
        <ContactForm />
      </section>
      <span>&copy; Ottawa ON. 2024</span>
      <span>admin@ottawastars.com</span>
    </footer>
  );
};
