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
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <span> Sahil&apos;s Portfolio</span>
      </div>

      {/* Navigation Links */}
      <ul className="footer-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Social Media Icons */}
      <div className="footer-socials">
        <a href="https://github.com/sahilwebdev21" target="_blank" className="social-icon" title="GitHub">
          <Image src="/github.svg" alt="GitHub" width={30} height={30} />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" className="social-icon" title="Twitter">
          <Image src="/twitter.svg" alt="Twitter" width={30} height={30} />
        </a>
        <a href="https://www.linkedin.com/in/sahil-gupta-ba01b7350/" target="_blank" className="social-icon" title="LinkedIn">
          <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />
        </a>
      </div>

      {/* Dark Mode Toggle */}
      <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {/* Auto-updating Copyright */}
      <p className="copyright">© {currentYear} Sahil Gupta. All Rights Reserved.</p>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <button className="scroll-top-btn" onClick={scrollToTop}>⬆</button>
      )}
    </footer>
  );
}
