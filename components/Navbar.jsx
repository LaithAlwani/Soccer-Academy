"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <Link href="/" className="logo">
        <div className="bg-red"></div>
        <Image src="/off_logo.png" fill priority />
        
      </Link>
      <div className="nav-links" onClick={() => setIsMenuOpen(false)}>
        <NavLinks />
      </div>
      <div
        className={`mobile-nav-btn ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="burger-icon"></div>
      </div>
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`} onClick={()=>setIsMenuOpen(false)}>
        <NavLinks />
      </div>
    </nav>
  );
}

const NavLinks = () => {
  return (
    <>
      <ActiveLink name="Home" path="/" />
      <ActiveLink name="Programs" path="/programs" />
      <ActiveLink name="Register" path="/register" />
      <ActiveLink name="Special Needs" path="/special-needs" />
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
