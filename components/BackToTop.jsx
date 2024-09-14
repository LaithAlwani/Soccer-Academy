"use client";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo(0,0)
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);
  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}>
      <FaAngleUp size={24} />
    </button>
  );
}
