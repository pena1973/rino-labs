"use client";

import React, { FormEvent, useState } from "react";
import type { Lang } from "../page";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type Props = { lang: Lang };

export const Contact: React.FC<Props> = ({ lang }) => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const text = {
    title:
      lang === "ru"
        ? "Давайте сделаем что-то классное вместе"
        : "Let’s build something together",
    lead:
      lang === "ru"
        ? "Если вам нужен проект под ключ или развитие текущего продукта — напишите мне. Я открыта к удалённому сотрудничеству и долгосрочным партнёрствам."
        : "If you need a project built from scratch or want to grow an existing product, feel free to reach out. I'm open to remote collaboration and long-term partnerships.",
    labels: {
      name: lang === "ru" ? "Имя" : "Name",
      email: "Email",
      subject: lang === "ru" ? "Тема" : "Subject",
      message: lang === "ru" ? "Сообщение" : "Message",
    },
    placeholders: {
      name: lang === "ru" ? "Как к вам обращаться" : "Your name",
      email: "you@example.com",
      subject:
        lang === "ru"
          ? "О чём вы хотите поговорить?"
          : "What would you like to work on?",
      message:
        lang === "ru"
          ? "Расскажите немного о проекте, сроках и целях."
          : "Tell me a bit about your project, timeline and goals.",
    },
    btnSending: lang === "ru" ? "Отправка..." : "Sending...",
    btnSend: lang === "ru" ? "Отправить сообщение" : "Send message",
    toastSuccess:
      lang === "ru"
        ? "Сообщение отправлено, спасибо! Я свяжусь с вами в ближайшее время."
        : "Message sent, thank you! I'll get back to you soon.",
    genericError:
      lang === "ru"
        ? "Что-то пошло не так. Попробуйте ещё раз или напишите на email напрямую."
        : "Something went wrong. Please try again or contact me directly by email.",
    errors: {
      name: lang === "ru" ? "Пожалуйста, укажите имя." : "Please enter your name.",
      emailRequired:
        lang === "ru"
          ? "Пожалуйста, укажите email."
          : "Please enter your email.",
      emailInvalid:
        lang === "ru"
          ? "Пожалуйста, введите корректный email."
          : "Please enter a valid email.",
      subject:
        lang === "ru" ? "Пожалуйста, добавьте тему." : "Please add a subject.",
      message:
        lang === "ru"
          ? "Пожалуйста, напишите сообщение."
          : "Please write a message.",
    },
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!form.name.trim()) newErrors.name = text.errors.name;
    if (!form.email.trim()) {
      newErrors.email = text.errors.emailRequired;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = text.errors.emailInvalid;
    }
    if (!form.subject.trim()) newErrors.subject = text.errors.subject;
    if (!form.message.trim()) newErrors.message = text.errors.message;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      // TODO: подключить реальную отправку (mailto или /api/contact)
      await new Promise((resolve) => setTimeout(resolve, 600));

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setStatus("idle");
      alert(text.genericError);
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="sectionTitle">
          {text.title}
        </h2>
        <p className="sectionLead">{text.lead}</p>

        <form className="contactForm" onSubmit={handleSubmit} noValidate>
          <div className="formRow">
            <div className="formField">
              <label htmlFor="name">{text.labels.name}</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange("name")}
                placeholder={text.placeholders.name}
              />
              {errors.name && <p className="formError">{errors.name}</p>}
            </div>
            <div className="formField">
              <label htmlFor="email">{text.labels.email}</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder={text.placeholders.email}
              />
              {errors.email && <p className="formError">{errors.email}</p>}
            </div>
          </div>

          <div className="formField">
            <label htmlFor="subject">{text.labels.subject}</label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={handleChange("subject")}
              placeholder={text.placeholders.subject}
            />
            {errors.subject && <p className="formError">{errors.subject}</p>}
          </div>

          <div className="formField">
            <label htmlFor="message">{text.labels.message}</label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={handleChange("message")}
              placeholder={text.placeholders.message}
            />
            {errors.message && <p className="formError">{errors.message}</p>}
          </div>

          <div className="formActions">
            <button
              type="submit"
              className="btn primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? text.btnSending : text.btnSend}
            </button>

            {status === "success" && (
              <div className="toast">{text.toastSuccess}</div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
