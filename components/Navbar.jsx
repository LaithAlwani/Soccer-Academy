"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaPhoneFlip, FaWhatsapp, FaSquareWhatsapp   } from "react-icons/fa6";

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
          <Image src="/off_logo.png" alt="ottawa stars soccer academy logo" fill priority />
        </div>
        <div>
          <h1>Ottawa Stars</h1>
          <span>Soccer Academy</span>
        </div>
      </Link>
      <div className="flex-center flex-reverse">
        <a href="tel:6138841155" target="_blank" rel="noopener noreferrer" className="btn btn-primary flex-center call-btn-nav">
          CALL NOW<FaPhoneFlip />
        </a>
        <a href="tel:6138841155" target="_blank" rel="noopener noreferrer" className="flex-center call-btn">
          <FaPhoneFlip size={20}/>
        </a>
        <a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/16138841155" className="whatsapp-btn">
          <FaSquareWhatsapp  size={40} color="#25D366"/>
        </a>
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
      {/* <ActiveLink name="Program" path="#program" /> */}
      <ActiveLink name="Register" path="/register" />
      <ActiveLink name="Location" path="/#location" />
      <ActiveLink name="Meet the Coach" path="/#coach" />
      <ActiveLink name="Contact" path="/contact" />
    </>
  );
};

const ActiveLink = ({ name, path }) => {
  const pathname = usePathname();
  const active = pathname === path ? "active" : "";
  return <a href={path} className={active}>{name}</a>;
};
