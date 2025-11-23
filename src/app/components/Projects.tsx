"use client";

import React from "react";
import type { Lang } from "../page";

type Props = { lang: Lang };

export const Projects: React.FC<Props> = ({ lang }) => {
    const title =
        lang === "ru" ? "Мои авторские проекты" : "Selected projects";
    const lead =
        lang === "ru"
            ? "Проекты в которые я вложила свои душу и знания"
            : "A glimpse into the products I've been building recently.";

    return (
        <section id="projects" className="section" aria-labelledby="projects-title">
            <div className="container">
                <h2 id="projects-title" className="sectionTitle">
                    {title}
                </h2>
                <p className="sectionLead">{lead}</p>

                <div className="projectsGrid">
                    {/* Plan-Track */}
                    <article className="projectCard">
                        <div className="projectTag">
                            {lang === "ru"
                                ? "Производственный планировщик / SaaS"
                                : "Production planner / SaaS"}
                        </div>
                        <h3 className="projectTitle">
                            {lang === "ru"
                                ? "www.plan-track.pro"
                                : "Production Planner / Plan-Track"}
                        </h3>
                        <p className="projectText">
                            {lang === "ru"
                                ? `Веб-приложение для планирования загрузки производственной команды/бригады. `
                                : "A web application for planning workloads of a team, workshop or production unit. It handles operations, units, changeovers, quality control, and gives managers a clear picture of what's happening on the floor."}
                        </p>
                        <ul className="projectList">
                            <li>
                                {lang === "ru"
                                    ? "Помогает эффективно управлять работой производственной бригады."
                                    : "Calendar aware of weekends, holidays, shifts and time zones."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Автоматически рассчитывает план загрузки каждого работника с учетом его навыков, скорости работы и расписания"
                                    : "Calendar aware of weekends, holidays, shifts and time zones."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? " Расчитывает кратчайший срок исполнения заказа с учетом уже запланированной загрузки каждого работника."
                                    : "Calendar aware of weekends, holidays, shifts and time zones."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Всегда известна точная дата готовности каждого изделия заказа"
                                    : "Statistics, logging and system health monitoring."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Моментально отслеживает исполнение операций."
                                    : "Calendar aware of weekends, holidays, shifts and time zones."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Есть контроль качества и исправление брака."
                                    : "Calendar aware of weekends, holidays, shifts and time zones."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Есть возможность использования сторонних подрядчиков"
                                    : "Calendar aware of weekends, holidays, shifts and time zones."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Есть учет расписания работы команды и учет индивидуальных отклонений расписания работников"
                                    : "Calendar aware of weekends, holidays, shifts and time zones."}
                            </li>


                            <li>
                                {lang === "ru"
                                    ? "Есть отчеты о загрузке и результативности сотрудников"
                                    : "Support for retooling, inner/outer units, pinned loads."}
                            </li>

                        </ul>
                        <p className="projectTech">
                            {lang === "ru" ? "Создано на " : "Built with "}
                            <strong>Next.js, TypeScript, PostgreSQL</strong>{" "}
                            {lang === "ru"
                                ? "и кастомных алгоритмах планирования."
                                : "and custom scheduling algorithms."}
                        </p>
                        <a
                            href="https://www.plan-track.pro/landing"
                            target="_blank"
                            rel="noreferrer"
                            className="btn primary projectBtn"
                        >
                            {lang === "ru" ? "Открыть приложение" : "Open app"}
                        </a>
                    </article>

                    {/* LinguaFly */}
                    <article className="projectCard">
                        <div className="projectTag">
                            {lang === "ru"
                                ? "Платформа для изучения языков"
                                : "Language learning platform"}
                        </div>
                        <h3 className="projectTitle">
                            LinguaFly —{" "}
                            {lang === "ru"
                                ? "новый язык легко и приятно"
                                : "language learning platform"}
                        </h3>
                        <p className="projectText">
                            {lang === "ru"
                                ? `Веб-платформа которая помогает закреплять правила и пополнять словарный запас в контексте коротких текстов.
                                Включает упражнения и интерактивный тренажёр для запоминания слов. Делает регулярную практику языка лёгкой и приятной.`
                                : "A web platform for learning languages (like Portuguese and Russian) through stories, exercises and interactive trainers. It aims to make consistent practice feel light and playful."}
                        </p>
                        <ul className="projectList">
                            <li>
                                {lang === "ru"
                                    ? "Двуязычные тексты с режимами native / target."
                                    : "Bilingual texts with native / target language views."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Интерактивные доски с drag-and-drop упражнениями и спринтами по 10 слов."
                                    : "Interactive boards with drag-and-drop exercises and 10-word sprints."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Подборки слов для каждого текста, мягкая геймификация."
                                    : "Word collections, spaced practice and gentle gamification."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Мультиязычный интерфейс и «живой» тёплый дизайн."
                                    : "Multi-language UI and a warm, 'alive' visual design."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Библиотека текстов постоянно пополняется."
                                    : "Multi-language UI and a warm, 'alive' visual design."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Гибкий уровень сложности: тексты и упражнения, рассчитанные на уровни от A1/A2 до B1/B2"
                                    : "Multi-language UI and a warm, 'alive' visual design."}
                            </li>
                            
                        </ul>
                        <p className="projectTech">
                            {lang === "ru" ? "Создано на " : "Built with "}
                            <strong>Next.js, TypeScript</strong>{" "}
                            {lang === "ru"
                                ? "и собственном интерактивном движке."
                                : "and a custom interactive learning engine."}
                        </p>
                        <a
                            // href="https://linguafly.app"
                            href="https://lingua-fly-zryfz.ondigitalocean.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn secondary projectBtn"
                        >
                            {lang === "ru" ? "Подробнее" : "Learn more"}
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
};
