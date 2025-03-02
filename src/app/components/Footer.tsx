"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      {/* Logo - Scroll to Top */}
      <div className="footer-logo" onClick={scrollToTop}>
        <Image src="/profile.jpg" alt="Logo" width={50} height={50} />
        <span> SahilWebDev</span>
      </div>

      {/* Auto-updating Copyright */}
      <p className="copyright">© {currentYear} SahilWebDev. All Rights Reserved.</p>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <button className="scroll-top-btn" onClick={scrollToTop}>⬆</button>
      )}
    </footer>
  );
}
