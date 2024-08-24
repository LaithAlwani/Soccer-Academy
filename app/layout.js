import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

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
          <Toaster />
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
    <footer>
      <span>&copy; Ottawa ON. 2024</span>
      <span>laithalwani@gmail.com</span>  
    </footer>
  )
}