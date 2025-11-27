"use client";

import React from "react";
import type { Lang } from "../page";

type Props = { lang: Lang };

export const About: React.FC<Props> = ({ lang }) => {
  const title = lang === "ru" ? "Обо мне" : "About me";

  const lead =
    lang === "ru"
      ? `Я full-stack веб-разработчик, который любит создавать продуманные, человечные продукты. 
      Мой основной стек — TypeScript, React, Next.js, Node.js и PostgreSQL.`
      : `I'm a full-stack web developer who enjoys building thoughtful, human-centered products. 
      My main stack is TypeScript, React, Next.js, Node.js and PostgreSQL.`;

  const text =
    lang === "ru"
      ? `За последние годы я спроектировала и разработала две сложных SaaS-системы: 
      производственный планировщик — приложение для автоматизации планирования для производственной бригады и
      платформу для пополнения словарного запаса для тех, кто учит язык.
      Я делаю архитектуру, фронтенд и бэкенд, интеграции (платежи, email, аналитика), 
      деплой на облачные платформы вроде DigitalOcean и дальнейшую поддержку и развитие продукта.`
      : `In recent years I’ve designed and built two complex SaaS products: 
      a production planner that automates planning for a shop-floor team, and 
      a vocabulary-building platform for people learning a foreign language.
      I handle architecture, frontend and backend implementation, integrations (payments, email, analytics), 
      deployment to cloud platforms like DigitalOcean, and ongoing product support and evolution.`;

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="sectionTitle">
          {title}
        </h2>
        <p className="sectionLead">{lead}</p>
        <p className="sectionText">{text}</p>

        <div className="pillGroups">
          <div className="pillGroup">
            <h3 className="pillGroupTitle">Frontend</h3>
            <div className="pillRow">
              <span className="pill">React</span>
              <span className="pill">Next.js</span>
              <span className="pill">TypeScript</span>
              <span className="pill">Redux Toolkit</span>
            </div>
          </div>

          <div className="pillGroup">
            <h3 className="pillGroupTitle">Backend</h3>
            <div className="pillRow">
              <span className="pill">Node.js</span>
              <span className="pill">REST APIs</span>
              <span className="pill">PostgreSQL</span>
              <span className="pill">TypeORM</span>
            </div>
          </div>

          <div className="pillGroup">
            <h3 className="pillGroupTitle">DevOps</h3>
            <div className="pillRow">
              <span className="pill">CI/CD</span>
              <span className="pill">
                {lang === "ru" ? "Облачный деплой" : "Cloud deployment"}
              </span>
              <span className="pill">
                {lang === "ru"
                  ? "Мониторинг и логирование"
                  : "Monitoring & logging"}
              </span>
            </div>
          </div>

          <div className="pillGroup">
            <h3 className="pillGroupTitle">Product</h3>
            <div className="pillRow">
              <span className="pill">
                {lang === "ru"
                  ? "Продуктовый/UX-подход"
                  : "Product & UX mindset"}
              </span>
              <span className="pill">
                {lang === "ru" ? "Аналитика" : "Analytics"}
              </span>
              <span className="pill">
                {lang === "ru" ? "Долгосрочная поддержка" : "Long-term support"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
