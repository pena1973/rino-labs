"use client";

import React from "react";
import type { Lang } from "../page";

type Props = { lang: Lang };

export const Projects: React.FC<Props> = ({ lang }) => {
    const title =
        lang === "ru" ? "Мои авторские проекты" : "My own products";
    const lead =
        lang === "ru"
            ? "Проекты в которые я вложила свои душу и знания"
            : "Projects I've poured my skills and heart into.";

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
                                : "A web application for planning the workload of a production team or workshop. It manages operations, workers, units, changeovers and quality control, giving managers a clear view of what is happening on the shop floor."}
                        </p>
                        <ul className="projectList">
                            <li>
                                {lang === "ru"
                                    ? "Помогает эффективно управлять работой производственной бригады."
                                    : "Helps manage the work of a production team or crew efficiently."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Автоматически рассчитывает план загрузки каждого работника с учетом его навыков, скорости работы и расписания"
                                    : "Automatically builds a workload plan for each worker, taking into account their skills, speed and working schedule."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? " Расчитывает кратчайший срок исполнения заказа с учетом уже запланированной загрузки каждого работника."
                                    : "Calculates the shortest possible lead time for each order, considering the current workload of every worker."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Всегда известна точная дата готовности каждого изделия заказа"
                                    : "Keeps an accurate ready date for every item in the order at all times."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Моментально отслеживает исполнение операций."
                                    : "Tracks the execution status of operations in real time."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Есть контроль качества и исправление брака."
                                    : "Includes quality control tools and rework handling."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Есть возможность использования сторонних подрядчиков"
                                    : "Supports working with external subcontractors."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Есть учет расписания работы команды и учет индивидуальных отклонений расписания работников"
                                    : "Takes into account the team schedule and individual deviations for each worker."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Есть отчеты о загрузке и результативности сотрудников"
                                    : "Provides reports on employee workload and performance."}
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
                            {lang === "ru" ? "Подробнее" : "Learn more"}                            
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
                            lingua-fly.com - {" "}
                            {lang === "ru"
                                ? " учить новый язык легко и приятно"
                                : "learn a new language the easy way"}
                        </h3>
                        <p className="projectText">
                            {lang === "ru"
                                ? `Веб-платформа которая помогает закреплять правила и пополнять словарный запас в контексте коротких текстов.
                                Включает упражнения и интерактивный тренажёр для запоминания слов. Делает регулярную практику языка лёгкой и приятной.`
                                : "A web platform that helps you internalise grammar and grow your vocabulary through short texts. It includes exercises and an interactive word trainer that makes regular language practice light and enjoyable."}
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
                                    : "Curated word sets for each text and gentle gamification."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Мультиязычный интерфейс и «живой» тёплый дизайн."
                                    : "Multi-language UI and a warm, “alive” visual design."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Библиотека текстов постоянно пополняется."
                                    : "The text library is constantly growing."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Гибкий уровень сложности: тексты и упражнения, рассчитанные на уровни от A1/A2 до B1/B2"
                                    : "Flexible difficulty: texts and exercises designed for levels from A1/A2 up to B1/B2."}
                            </li>
                            <li>
                                {lang === "ru"
                                    ? "Контент создается с помощью искуственного интелекта"
                                    : "Content is created and refined with the help of artificial intelligence."}
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
                            href="https://lingua-fly.com"
                            target="_blank"
                            rel="noreferrer"
                            className="btn secondary projectBtn"
                        >
                             {lang === "ru" ? "Открыть " : "Open"}
                            
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
};
