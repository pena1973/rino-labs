# Rino Labs

Rino Labs is a personal portfolio and product studio website built with Next.js, React, and TypeScript.

The project presents the work of Natalia Barinova as a full-stack web developer and product creator. It showcases professional experience, selected SaaS products, development approach, and provides a contact form for potential clients, partners, and collaborators.

The website is designed as a clean, bilingual, modern landing page with a strong focus on real products, practical business value, and full-cycle web development.

---

## Purpose

Rino Labs is created to present professional web development services and product-building experience in a clear and structured way.

The main goal of the website is to show:

* who Natalia is as a developer and product creator;
* what kind of projects she builds;
* which technologies she works with;
* how she approaches product development;
* how potential clients or partners can contact her.

The website works both as a portfolio and as a lightweight business landing page for freelance, contract, and long-term collaboration opportunities.

---

## Why it is useful

Rino Labs can be useful for:

* presenting full-stack development experience;
* showcasing SaaS and product-oriented projects;
* explaining technical and product skills in a simple way;
* giving potential clients a clear path to contact the developer;
* demonstrating a real production-ready Next.js landing page;
* testing personal branding and service positioning.

The project is intentionally focused and lightweight. It does not require a database and can be deployed quickly, while still supporting a professional contact flow through an email API.

---

## Project Concept

Rino Labs is built around the idea that modern web development is not only about code.

The website communicates a full-cycle approach:

* product thinking;
* UX and interface design;
* frontend development;
* backend/API development;
* integrations;
* cloud deployment;
* long-term support and product evolution.

It is designed to show not only technologies, but also the ability to turn ideas into working, useful, maintainable digital products.

---

## Features

* Personal portfolio landing page
* Bilingual interface: English and Russian
* Language selection with saved user preference
* Light / dark theme switcher
* Hero section with positioning and call to action
* About section with skills and experience
* Projects section with selected products
* Process section describing the development workflow
* Contact form with validation
* Email sending through Resend API
* Responsive layout
* No database required
* Built with modern Next.js App Router structure

---

## Tech Stack

The project is built with:

* Next.js
* React
* TypeScript
* Tailwind CSS
* ESLint
* Resend

Current main dependencies:

* `next`
* `react`
* `react-dom`
* `typescript`
* `tailwindcss`
* `eslint`
* `resend`

---

## Project Structure

```text
rino-labs/
├── public/                  # Static assets
├── src/
│   └── app/
│       ├── api/
│       │   └── contact/      # Contact form API route
│       ├── components/       # UI sections and layout components
│       │   ├── About.tsx
│       │   ├── Contact.tsx
│       │   ├── Footer.tsx
│       │   ├── Hero.tsx
│       │   ├── Navbar.tsx
│       │   ├── Process.tsx
│       │   └── Projects.tsx
│       ├── globals.css       # Global styles and theme variables
│       ├── layout.tsx        # Root layout and metadata
│       └── page.tsx          # Main page composition
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Project scripts and dependencies
└── tsconfig.json             # TypeScript configuration
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in the browser:

```text
http://localhost:3000
```

Build the project:

```bash
npm run build
```

Run production build locally:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

---

## Environment Variables

The contact form uses Resend to send messages.

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
MAIL_TO=your_email@example.com
```

`RESEND_API_KEY` is used to authorize email sending through Resend.

`MAIL_TO` is the email address where contact form messages will be delivered.

---

## Contact Form

The contact form sends user messages through the `/api/contact` API route.

The form includes:

* name field;
* email field;
* subject field;
* message field;
* client-side validation;
* server-side email sending;
* success state after sending.

This allows the website to work as a real business contact point rather than only a static portfolio page.

---

## Content Model

Most visible website content is currently stored directly inside React components.

This means:

* there is no external CMS;
* there is no database;
* content can be edited directly in the source files;
* the site remains simple to deploy and maintain;
* the project can later be extended with a CMS, admin panel, blog, or database if needed.

This approach is suitable for a personal portfolio, service landing page, MVP, or product studio website.

---

## Possible Future Improvements

Possible next steps for the project:

* add a blog or article section;
* add more case studies;
* add separate project detail pages;
* add SEO metadata for each section or page;
* add Open Graph preview images;
* add analytics;
* add more languages;
* connect a CMS for easier content editing;
* add downloadable CV or portfolio PDF;
* improve contact lead tracking;
* add automated deployment documentation.

---

## Author

Created by Natalia Barinova as a personal portfolio and product studio website.

The project demonstrates the ability to build a clean, bilingual, production-ready web presence using modern frontend technologies, API integration, responsive layout, and product-oriented communication.

---

## License

This project is a personal portfolio and business presentation website.

License can be added later depending on the intended distribution model.

---

## Link

https://rino-labs.com/
