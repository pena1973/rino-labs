"use client";

import React from "react";
import type { Lang } from "../page";

type Props = { lang: Lang };

export const Footer: React.FC<Props> = ({ lang }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footerInner">
        <p className="footerCopy">
          © Rino Labs, {year} —{" "}
          {lang === "ru"
            ? "портфолио Nata Barinova"
            : "portfolio of Nata Barinova"}
        </p>
        <div className="footerLinks">
          {/* TODO: заменить на реальные ссылки */}
          <a
            href="https://github.com/rinolabs-placeholder"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rinolabs-placeholder"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/rinolabs_placeholder"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
};
