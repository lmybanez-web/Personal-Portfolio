# Portfolio

A single-page personal portfolio built with **Vite + React + TypeScript + Ant Design**, modeled on the
section flow of the "Davis" portfolio template (Home / About / Services / Skills / Resume / Portfolio /
Reviews / Contact).

## Getting started

```bash
npm install
npm run dev
```

## Structure

```
src/
  data.ts             ← all copy & content lives here — edit this first
  theme.ts             ← Ant Design ConfigProvider tokens (colors, fonts, radius)
  index.css            ← CSS variables + global styles
  App.tsx              ← assembles all sections
  components/
    Navbar.tsx          sticky nav + mobile drawer
    Hero.tsx            intro / name / CTA
    About.tsx           bio + fact grid
    Services.tsx        service cards
    Skills.tsx           progress bars
    Resume.tsx           experience + education timeline
    Portfolio.tsx        project grid with hover overlay
    Testimonials.tsx     client quote carousel
    Contact.tsx          form (Ant Design Form) + contact info
    Footer.tsx
```

## Making it yours

1. **Edit `src/data.ts`** — name, role, bio, skills, experience, education, portfolio items,
   testimonials, and contact details all live here.
2. **Add real images** — drop files into `public/assets/` (hero photo, portfolio thumbnails, CV PDF)
   and update the paths already referenced in `data.ts` (e.g. `/assets/hero.jpg`).
3. **Adjust the palette** — colors are CSS variables in `src/index.css` (`:root`) and mirrored in
   `src/theme.ts` for Ant Design components. Change both together.
4. **Wire up the contact form** — `Contact.tsx`'s `onFinish` currently just shows a success toast.
   Point it at your email service of choice (Formspree, Resend, your own API route, etc).

## Notes

- Fonts (Space Grotesk / Inter / JetBrains Mono) are loaded from Google Fonts in `index.html`.
- The design uses no third-party CSS framework beyond Ant Design — layout/spacing is done with
  Ant Design's `Row`/`Col` grid plus a handful of CSS variables.
- Fully responsive down to mobile; the hero's side rail and desktop nav collapse under 768px.
"# Personal-Portfolio" 
