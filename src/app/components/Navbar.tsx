"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons from Lucide

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo & Site Name */}
      <div className="logoContainer">
        <Link href="/" className="logoLink">
          <Image src="/profile.jpg" alt="Logo" width={50} height={50} />
          <span className="siteName">SahilWebDev</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* CTA Buttons */}
      <div className="cta">
        <a href="/resume.pdf" download className="resumeBtn">Download Resume</a>
        <Link href="/contact" className="hireBtn">Hire Me</Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
    </nav>
  );
}
