# 14 · Capstone: a complete landing page

Time to put it all together. There's **no pre-written markup** this time, only an empty page and a brief. You decide the structure.

File: `exercises/14-capstone/1-landing.html` (uses its own `capstone.css`, so you can theme freely)

## The brief

Build a landing page for a fictional product (your pick: an app, a coffee brand, a game studio…). It must include:

1. **Navbar**: logo, links, CTA button; collapses to a ☰ button on mobile (showing/hiding the menu with a tiny script or `<details>` is fine)
2. **Hero**: big headline, subtext, two CTAs, and a visual (gradient shape, image, or mock screenshot made from divs)
3. **Logo cloud** or social proof strip
4. **Features**: at least 6 features in a responsive grid (1 → 2 → 3 columns)
5. **Pricing**: 3 tiers, the middle one highlighted; toggle monthly/yearly is a bonus (`has-checked:` makes it JS-free!)
6. **Testimonials**: at least 2, with avatars
7. **FAQ**: `<details>` accordion with animated chevrons
8. **Footer**: multi-column links, collapses on mobile

## Requirements checklist

- [ ] **Responsive** from 360px to 1440px; mobile-first classes
- [ ] **Dark mode** with a toggle (class strategy)
- [ ] **Custom theme** in `capstone.css`: brand color scale, display font, at least one semantic color
- [ ] **States**: every link/button has hover + visible keyboard focus
- [ ] **Motion**: at least 3 tasteful transitions; respects `motion-reduce`
- [ ] **No conflicting utilities** on any element, and no dynamically built class names
- [ ] **Reasonable consistency**: a limited set of spacing values, radii, and font weights

## How to approach it

1. Sketch the sections on paper (seriously, 2 minutes).
2. Build each section **mobile first**, top to bottom. Don't style it all at once.
3. After each section, widen the window and add breakpoints.
4. Do dark mode and motion as a final pass.
5. Ask Claude for a review per section (`check 14.1 hero`) rather than only at the end. Smaller feedback loops make for faster learning.

## After the capstone

Ask Claude to `challenge me`. Claude will generate a target design in `challenges/` for you to recreate from a screenshot-like reference, at whatever difficulty you want. Also good next steps:

- Build something real with Tailwind in a framework you use (React, Vue, Svelte, Astro…)
- Read the official docs at tailwindcss.com. You now know enough to navigate them fluently
- Try `@tailwindcss/forms`, `prettier-plugin-tailwindcss`, and `tailwind-merge` in a project
