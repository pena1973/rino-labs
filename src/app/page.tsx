"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export type Lang = "en" | "ru";

const getInitialLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("lang");
  if (stored === "en" || stored === "ru") return stored;

  const browser = navigator.language.toLowerCase();
  if (browser.startsWith("ru")) return "ru";
  return "en";
};

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(getInitialLang());
  }, []);

  const handleLangChange = (newLang: Lang) => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", newLang);
    }
  };

  return (
    <>
      <Navbar lang={lang} onLangChange={handleLangChange} />
      <main className="main">
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Process lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
