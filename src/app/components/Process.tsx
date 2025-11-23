"use client";

import React from "react";
import type { Lang } from "../page";

type Props = { lang: Lang };

export const Process: React.FC<Props> = ({ lang }) => {
  const title = lang === "ru" ? "Как я работаю" : "How I work";
  const lead =
    lang === "ru"
      ? "Прозрачный и совместный процесс — от первой идеи до работающего продукта."
      : "A clear, collaborative process — from the first idea to a running product.";

  const steps =
    lang === "ru"
      ? [
          {
            title: "Discovery & planning",
            text: "Формируем цели, ограничения и критерии успеха, затем собираем реалистичный roadmap под вашу команду и бюджет.",
          },
          {
            title: "Design & architecture",
            text: "Прорабатываю UX, архитектуру системы, модель данных, API и интеграции, учитывая рост и сопровождение.",
          },
          {
            title: "Implementation",
            text: "Разрабатываю фронтенд и бэкенд, подключаю внешние сервисы и регулярно показываю промежуточные версии.",
          },
          {
            title: "Launch & support",
            text: "Деплой в облако, мониторинг, улучшения по реальным данным и поддержка продукта в жизни.",
          },
        ]
      : [
          {
            title: "Discovery & planning",
            text: "We clarify goals, constraints and success metrics, then shape a roadmap that fits your team and budget.",
          },
          {
            title: "Design & architecture",
            text: "I design the UX and system architecture: data model, APIs, integrations and how everything will scale.",
          },
          {
            title: "Implementation",
            text: "I build the frontend and backend, connect external services and keep you in the loop with demos.",
          },
          {
            title: "Launch & support",
            text: "We deploy to the cloud, set up monitoring and iterate based on real usage and feedback.",
          },
        ];

  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="container">
        <h2 id="process-title" className="sectionTitle">
          {title}
        </h2>
        <p className="sectionLead">{lead}</p>

        <div className="processGrid">
          {steps.map((step, index) => (
            <article key={step.title} className="processCard">
              <div className="processBadge">
                <span>{index + 1}</span>
              </div>
              <h3 className="processTitle">{step.title}</h3>
              <p className="processText">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
