"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaPhoneFlip, FaSquareWhatsapp, FaWhatsapp } from "react-icons/fa6";
import "@/styles/navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflow = "scroll");
  }, [isMenuOpen]);

  return (
    <nav className="">
      <Link href="/" className="logo-container">
        <div className="logo">
          <Image src="/off_logo.webp" alt="ottawa stars soccer academy logo" fill priority />
        </div>
        <div>
          <h1>Ottawa Stars</h1>
          <span>Soccer Academy</span>
        </div>
      </Link>
      <div className="flex-center flex-reverse">
        <a
          href="tel:6138841155"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary flex-center call-btn-nav">
          <span>CALL NOW</span>
          <FaPhoneFlip />
        </a>
        <ul className="nav-icons">
          <li>
            <a
              href="tel:6138841155"
              aria-label="Call Now"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-center call-btn">
              <FaPhoneFlip size={25} />
            </a>
          </li>
          <li>
            <a
              aria-label="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/16138841155"
              className="flex-center whatsapp-btn">
              <FaWhatsapp size={35} />
            </a>
          </li>
        </ul>

        <div className="nav-links" onClick={() => setIsMenuOpen(false)}>
          <NavLinks />
        </div>
        <div
          className={`mobile-nav-btn ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="burger-icon"></div>
        </div>
        <div className={`sidebar ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(false)}>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}

const NavLinks = () => {
  return (
    <>
      <ActiveLink name="Home" path="/" />
      <ActiveLink name="Register" path="/register" />
      <ActiveLink name="Special Needs" path="/special-needs" />
      <ActiveLink name="About" path="/about" />
      <ActiveLink name="Contact" path="/contact" />
    </>
  );
};

const ActiveLink = ({ name, path }) => {
  const pathname = usePathname();
  const active = pathname === path ? "active" : "";
  return (
    <a href={path} className={active}>
      {name}
    </a>
  );
};
