"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { Github, Linkedin, Instagram, FacebookIcon} from "lucide-react"; // Importing Lucide icons

export default function Home() {
  const [bgAnimation, setBgAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => setBgAnimation(true), 500);
  }, []);

  return (
    <main className={`homeContainer ${bgAnimation ? "animateBg" : ""}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="text">
          <h1>
            Hi, I&apos;m <span className="highlight">Sahil Gupta</span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Web Developer", "Frontend Enthusiast", "Tech Explorer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p>Creating beautiful, responsive, and dynamic web experiences.</p>
          <div className="cta">
            <Link href="/contact" className="hireBtn">
              Hire Me
            </Link>
            <a href="/resume.pdf" className="resumeBtn" download>
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="profile">
          <Image
            src="/profile.jpg"
            alt="Sahil Gupta"
            width={250}
            height={250}
            className="profileImg"
          />
        </div>
      </section>

      {/* Social Media Links */}
      <div className="socialLinks">
        <a href="https://github.com/sahilwebdev21" target="_blank" className="socialIcon">
          <Github size={30} />
        </a>
        <a href="https://www.linkedin.com/in/sahil-gupta-ba01b7350/" target="_blank" className="socialIcon">
          <Linkedin size={30} />
        </a>
        <a href="https://www.instagram.com/sahilwebdev21/?hl=en" target="_blank" className="socialIcon">
          <Instagram size={30} />
        </a>
        <a href="https://www.facebook.com/sahilwebdev.np/" target="_blank" className="socialIcon">
          <FacebookIcon size={30} />
        </a>
      </div>
    </main>
  );
}
