/*export default function Home() {
  return (
    <main className="homeContainer">
      <h1>Welcome to My Portfolio</h1>
      <p>Showcasing my skills and projects.</p>
    </main>
  );
}
*/
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";

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
            <Link href="/contact" className="hireBtn">Hire Me</Link>
            <a href="/resume.pdf" className="resumeBtn" download>Download Resume</a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="profile">
          <Image
            src="/profile.png"
            alt="Sahil Gupta"
            width={250}
            height={250}
            className="profileImg"
          />
        </div>
      </section>

      {/* Social Media Links */}
      <div className="socialLinks">
        <a href="https://github.com/" target="_blank" className="socialIcon">🐙</a>
        <a href="https://linkedin.com/" target="_blank" className="socialIcon">🔗</a>
        <a href="https://twitter.com/" target="_blank" className="socialIcon">🐦</a>
      </div>
    </main>
  );
}
