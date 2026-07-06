# Andrea Turek Portfolio

This repository contains my personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. It is structured as a single-page portfolio with animated sections for my intro, background, experience, projects, skills, and contact form.

Visit here: https://aturek.vercel.app/

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion for section and card animation
- Resend for contact form email delivery

## What Is Included

The site uses the `app/` directory and is organized around one main public page plus one API route.

### Routes

- `/` renders the full portfolio landing page
- `/api/contact` handles contact form submissions and sends email through Resend

### Home Page Sections

The homepage in [`app/page.tsx`](app/page.tsx) renders these sections in order:

- `Navbar`
- `Hero`
- `About`
- `Experience`
- `Projects`
- `Skills`
- `Contact`

### Important Files

- [`app/layout.tsx`](app/layout.tsx): global layout, metadata, and font setup
- [`app/globals.css`](app/globals.css): global styling and theme rules
- [`app/src/components`](app/src/components): all visible portfolio sections and shared animation helpers
- [`app/src/data/projects.ts`](app/src/data/projects.ts): featured project content
- [`app/src/data/experience.ts`](app/src/data/experience.ts): experience timeline content
- [`app/src/data/site.ts`](app/src/data/site.ts): resume path and social links
- [`app/api/contact/route.ts`](app/api/contact/route.ts): contact form backend

## Running Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Then open `http://localhost:3000`.

## How I Built It

This portfolio uses the Next.js App Router instead of the older `pages/` router.

- The main website is rendered from [`app/page.tsx`](app/page.tsx)
- Shared document structure and metadata live in [`app/layout.tsx`](app/layout.tsx)
- UI is split into reusable React components under [`app/src/components`](app/src/components)
- Portfolio content is stored in separate TypeScript data files so I can update text and links without rewriting components
- The contact form posts to [`app/api/contact/route.ts`](app/api/contact/route.ts), where the server validates fields and sends the message through Resend
- Images use Next.js image handling via `next/image`
