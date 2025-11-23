"use client";

import React, { useEffect, useRef, useState } from "react";
import type { Lang } from "../page";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)"
  ).matches;
  return prefersDark ? "dark" : "light";
};

type NavbarProps = {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
};

const LANG_OPTIONS: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "EN" },
  { code: "ru", label: "Русский", native: "RU" },
  // TODO: сюда потом легко добавишь новые языки
];

export const Navbar: React.FC<NavbarProps> = ({ lang, onLangChange }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  // закрытие дропдауна по клику вне
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      window.localStorage.setItem("theme", next);
      return next;
    });
  };

  const tNav = {
    about: lang === "ru" ? "Обо мне" : "About",
    projects: lang === "ru" ? "Проекты" : "Projects",
    how: lang === "ru" ? "Как я работаю" : "How I work",
    contact: lang === "ru" ? "Контакты" : "Contact",
    themeLight: lang === "ru" ? "Светлая" : "Light",
    themeDark: lang === "ru" ? "Тёмная" : "Dark",
    langLabel: lang === "ru" ? "Язык" : "Language",
  };

  const currentLang = LANG_OPTIONS.find((l) => l.code === lang) ?? LANG_OPTIONS[0];

  return (
    <nav className="nav">
      <div className="container navInner">
        <div className="logo">Rino Labs</div>
        <div className="navLinks">
          <a href="#about">{tNav.about}</a>
          <a href="#projects">{tNav.projects}</a>
          <a href="#process">{tNav.how}</a>
          <a href="#contact" className="navContact">
            {tNav.contact}
          </a>

          {/* переключатель языка в виде пилюли + дропдаун */}
          <div className="langDropdownWrapper" ref={langRef}>
            <button
              type="button"
              className={"pillDropdownBtn" + (isLangOpen ? " open" : "")}
              onClick={() => setIsLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={isLangOpen}
            >
              <span className="pillDropdownDot" />
              <span className="pillDropdownText">{currentLang.native}</span>
              <span className="pillDropdownCaret">▾</span>
            </button>

            <ul
              className={
                "pillDropdownMenu" + (isLangOpen ? " open" : "")
              }
              role="listbox"
            >
              {LANG_OPTIONS.map((opt) => (
                <li
                  key={opt.code}
                  role="option"
                  aria-selected={opt.code === lang}
                  className={
                    "pillDropdownItem" +
                    (opt.code === lang ? " active" : "")
                  }
                  onClick={() => {
                    onLangChange(opt.code);
                    setIsLangOpen(false);
                  }}
                >
                  <span>{opt.native}</span>
                  <span className="pillDropdownLabel">{opt.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* переключатель темы */}
          <button
            type="button"
            className="themeToggle"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
          >
            <span
              className={
                "themeToggleThumb" + (theme === "dark" ? " themeToggleThumbDark" : "")
              }
            />
            <span className="themeToggleLabel">
              {theme === "light" ? tNav.themeLight : tNav.themeDark}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
