"use client";

import React from "react";
import type { Lang } from "../page";

type Props = { lang: Lang };

export const About: React.FC<Props> = ({ lang }) => {
  const title = lang === "ru" ? "Обо мне" : "About Nata";

  const lead =
    lang === "ru"
      ? "Я full-stack веб-разработчик, который любит создавать продуманные, человечные продукты. Мой основной стек — TypeScript, React, Next.js, Node.js и PostgreSQL."
      : "I'm a full-stack web developer who enjoys building thoughtful, human-centered products. My main stack is TypeScript, React, Next.js, Node.js and PostgreSQL.";

  const text =
    lang === "ru"
      ? "За последние годы я проектировала и запускала сложные SaaS-системы: производственные планировщики с кастомными алгоритмами планирования, приложения, работающие в разных часовых поясах и сменах, и языковые платформы с интерактивными упражнениями. Я отвечаю за архитектуру, фронтенд и бэкенд, интеграции (платежи, email, аналитика), деплой на облачные платформы вроде DigitalOcean и дальнейшую поддержку."
      : "Over the past years I've been designing and shipping complex SaaS systems: production planners with custom scheduling algorithms, apps that work across time zones and shifts, and language learning platforms with interactive exercises. I take care of architecture, frontend and backend implementation, integrations (payments, email, analytics), deployment to cloud providers like DigitalOcean, and ongoing support.";

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
                {lang === "ru" ? "Облачный деплой" : "Cloud deploy"}
              </span>
              <span className="pill">
                {lang === "ru" ? "Мониторинг и логирование" : "Monitoring & logging"}
              </span>
            </div>
          </div>

          <div className="pillGroup">
            <h3 className="pillGroupTitle">Product</h3>
            <div className="pillRow">
              <span className="pill">
                {lang === "ru" ? "Продуктовый/UX-подход" : "UX thinking"}
              </span>
              <span className="pill">
                {lang === "ru" ? "Аналитика" : "Analytics"}
              </span>
              <span className="pill">A/B tests</span>
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
