"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflow = "scroll");
  }, [isMenuOpen]);

  return (
    <nav>
      <Link href="/" className="logo-container">
        <div className="logo">
          <Image src="/off_logo.png" alt="academy logo" fill priority />
        </div>
        <h3>Ottawa Stars</h3>
      </Link>
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
    </nav>
  );
}

const NavLinks = () => {
  return (
    <>
      <ActiveLink name="Home" path="/" />
      {/* <ActiveLink name="Programs" path="/programs" /> */}
      <ActiveLink name="Special Needs" path="/special-needs" />
      {/* <ActiveLink name="Register" path="/register" /> */}
      <ActiveLink name="Contact" path="/contact" />
      {/* <ActiveLink name={<MdOutlineShoppingCart  size={24} />} path="/cart" /> */}
    </>
  );
};

const ActiveLink = ({ name, path }) => {
  const pathname = usePathname();
  const active = pathname === path ? "active" : "";

  return (
    <Link href={path} className={`${active}`}>
      {name}
    </Link>
  );
};
