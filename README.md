# Filipe Nogueira da Silva — Software Engineer Portfolio

[![Portfolio Live](https://img.shields.io/badge/Live-filipendsa.github.io-00e5ff?style=for-the-badge&logo=googlechrome&logoColor=white)](https://filipendsa.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-filipe--nogueira07-0077b5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/filipe-nogueira07/)
[![Yesode](https://img.shields.io/badge/Yesode-Co--Founder-a855f7?style=for-the-badge)](https://yesode.com)

Modern, mobile-first, high-performance portfolio built with React 19 + TypeScript + Vite, organized by Screaming Architecture (feature folders), with bespoke design tokens and lightweight zero-dependency i18n.

---

## ⚡ Highlights & Features

- **Mobile-First & Luxury Dark Aesthetics**: Inspired by high-end engineering portfolios, featuring bold monospace typography, clean bento grids, and subtle orbital glow effects.
- **Client-Side i18n**: Instant 1-click language switcher across **English (Default)**, **Português**, and **Español** persisted in `localStorage`.
- **Dynamic Career Duration**: Automatic real-time calculation of years of experience since career inception (2021).
- **Featured Case Studies**:
  1. **IATec Enterprise Core Systems**: Mission-critical administrative and educational software for thousands of institutions.
  2. **Yesode Platform & Digital Solutions**: Digital agency, web architecture, and cloud infrastructure co-founded in 2026.
  3. **Clean Architecture .NET 8 Boilerplate**: Enterprise DDD, CQRS (MediatR), and automated testing with xUnit and FluentAssertions.
  4. **Autonomous Logistics Rover (UNASP / ENAIC)**: Published scientific paper on mobile robotics with ultrasonic & infrared sensor fusion.
- **Zero Heavy Dependencies**: Removed bulky vendor libraries for maximum speed, security, and sub-second load times.
- **Complete SEO & Accessibility**: Open Graph previews, Twitter cards, semantic headings, Schema.org `Person` JSON-LD, sitemap, and robots.txt.

---

## 🛠️ Tech Stack

- **UI**: React 19 + TypeScript (strict), built with Vite
- **Styles**: Vanilla CSS3 Custom Properties (Design Tokens), Flexbox, CSS Grid, Bento layouts
- **Fonts**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) & [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- **SEO**: Semantic HTML5, Open Graph, Schema.org JSON-LD
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## 🧑‍💻 Running locally

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build to dist/
```

```
src/
├── app/          # composition root (App, providers)
├── features/     # one folder per portfolio section (hero, about, skills, ...)
├── domain/       # content data & business rules
└── shared/       # cross-cutting UI, i18n and styles
```

---

## 📬 Contact & Connect

- **Website**: [filipendsa.github.io](https://filipendsa.github.io/)
- **Co-Founder**: [yesode.com](https://yesode.com)
- **Email**: `filipe.nogueira@yesode.com`
- **WhatsApp**: `+55 (19) 98416-0295`
- **Location**: Hortolândia - SP, Brazil
