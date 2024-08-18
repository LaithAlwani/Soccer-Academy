"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <Link href="/" className="logo">
        <h3>Rising Stars</h3>
      </Link>
      <div
        className={`mobile-nav-btn ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="burger-icon"></div>
      </div>
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-links" onClick={() => setIsMenuOpen(false)}>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}

const NavLinks = () => {
  return (
    <>
      {/* <ActiveLink name="Home" path="/" /> */}
      <ActiveLink name="Programs" path="/programs" />
      <ActiveLink name="Register" path="/register" />
      <ActiveLink name="About" path="/about" />
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
