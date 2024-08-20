import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rising Stars Academy",
  description:
    "A youth soccer development located in Ottawa ON. serveing the Barrhaven/Riverside south community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}


const Footer = () => {
  return (
    <footer>CopyWrite Ottawa ON. 2024</footer>
  )
}