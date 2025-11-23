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
      ? "Я специализируюсь на сложных SaaS-системах: производственных планировщиках, языковых платформах и кастомных бизнес-инструментах. От архитектуры и UX до backend-API, баз данных, деплоя и долгосрочной поддержки — помогаю превращать идеи в надёжные продукты."
      : "I specialise in complex SaaS systems: production planners, language learning platforms and custom business tools. From architecture and frontend UX to backend APIs, databases, deployment and long-term support — I help turn ideas into reliable products.";

  const btnPlanner = lang === "ru" ? "Открыть планировщик" : "View Planner App";
  const btnLingua = lang === "ru" ? "Посмотреть LinguaFly" : "Explore LinguaFly";
  const btnContact = lang === "ru" ? "Связаться со мной" : "Contact me";

  const cardTitle =
    lang === "ru" ? "Full-stack фокус" : "Full-stack focus";

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
            {/* <a
              href="https://www.plan-track.pro/landing"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              {btnPlanner}
            </a>

            <a
              href="https://www.lingua-fly.com"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              {btnLingua}
            </a> */}

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
                  ? "Алгоритмы планирования и работа с часовыми поясами"
                  : "Scheduling &amp; time-zone logic"}
              </li>
              <li>
                {lang === "ru"
                  ? "Биллинг, аналитика, локализация (i18n)"
                  : "Billing, analytics, i18n"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
