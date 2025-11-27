"use client";

import React from "react";
import type { Lang } from "../page";

type Props = { lang: Lang };

export const Hero: React.FC<Props> = ({ lang }) => {
  const badge =
    lang === "ru"
      ? "Веб-разработчик и создатель продуктов"
      : "Web developer & product creator";

  const subtitle =
    lang === "ru"
      ? "Я проектирую и разрабатываю веб-приложения — от идеи до продакшена."
      : "I design and build web applications, from idea to production.";

  const description =
    lang === "ru"
      ? "Я специализируюсь на сложных SaaS-системах. От архитектуры и UX до backend-API, баз данных, деплоя и долгосрочной поддержки — помогаю превращать идеи в надёжные продукты."
      : "I specialise in complex SaaS systems. From architecture and UX to backend APIs, databases, deployment and long-term support, I help turn ideas into reliable products.";

  const btnPlanner =
    lang === "ru" ? "Открыть планировщик" : "View Planner app";
  const btnLingua =
    lang === "ru" ? "Посмотреть LinguaFly" : "Explore LinguaFly";
  const btnContact = lang === "ru" ? "Связаться со мной" : "Contact me";

  const cardTitle = lang === "ru" ? "Full-stack фокус" : "Full-stack focus";

  return (
    <section className="section heroSection" aria-labelledby="hero-title">
      <div className="container heroGrid">
        <div className="heroText">
          <p className="heroBadge">{badge}</p>
          <h1 id="hero-title" className="heroTitle">
            {lang === "ru" ? "Привет, я " : "Hi, I'm "}
            <span className="accent">Natalia Barinova</span>
          </h1>
          <p className="heroSubtitle">{subtitle}</p>
          <p className="heroDescription">{description}</p>

          <div className="heroActions">
            {/* если нужны ссылки на проекты, можно вернуть и эти кнопки */}
            {/* 
            <a href="#planner" className="btn primary">
              {btnPlanner}
            </a>
            <a href="#lingua" className="btn secondary">
              {btnLingua}
            </a>
            */}
            <a href="#contact" className="btn ghost">
              {btnContact}
            </a>
          </div>
        </div>

        <div className="heroCard" aria-hidden="true">
          <div className="heroOrb" />
          <div className="heroCardInner">
            <p className="heroCardTitle">{cardTitle}</p>
            <ul className="heroCardList">
              <li>TypeScript, React, Next.js</li>
              <li>Node.js, PostgreSQL, TypeORM</li>
              <li>
                {lang === "ru"
                  ? "Опыт в IT более 20 лет"
                  : "Over 20 years of experience in IT"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
