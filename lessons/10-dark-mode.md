# 10 · Dark mode

## The `dark:` variant

```html
<div class="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
```

By default, `dark:` follows the **operating system setting** (`prefers-color-scheme: dark`). To test it:
- in this course's lesson viewer: use the **theme button** in the top bar. The preview iframe follows the viewer's color scheme, so it flips `dark:` in your exercise too,
- switch your OS to dark mode, or
- in Chrome/Edge DevTools: `Ctrl+Shift+P` → "Emulate CSS prefers-color-scheme: dark" (handy when the exercise is open in its own tab)

## Choosing dark colors

Dark mode isn't "invert everything". Some rules that work:

| Light | Dark |
| --- | --- |
| page `bg-white` / `bg-slate-50` | `bg-slate-950` / `bg-slate-900` |
| card `bg-white` | `bg-slate-800` or `bg-white/5` |
| border `border-slate-200` | `border-slate-700` or `border-white/10` |
| heading `text-slate-900` | `text-white` |
| body `text-slate-600` | `text-slate-400` |
| accent `bg-indigo-600` | often `bg-indigo-500` (slightly lighter) |
| soft badge `bg-sky-50 text-sky-700` | `bg-sky-400/10 text-sky-400` |
| shadows | mostly useless in dark. Use rings/borders instead |

Translucent white (`bg-white/5`, `ring-white/10`) is very handy in dark mode because it adapts to whatever is behind it.

## Manual toggle (class strategy)

Most sites let the user choose. Override the `dark` variant in CSS so it reacts to a `.dark` class instead of the OS:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

Then toggle the class on `<html>` with JS:

```js
document.documentElement.classList.toggle("dark");
```

Typical full version: remember the choice in `localStorage`, and fall back to the OS setting:

```js
const dark = localStorage.theme === "dark" ||
  (!("theme" in localStorage) && matchMedia("(prefers-color-scheme: dark)").matches);
document.documentElement.classList.toggle("dark", dark);
```

(A data attribute works too: `@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));`)

## Semantic color tokens (preview of lesson 12)

Writing `bg-white dark:bg-slate-900` on every element gets repetitive. Bigger projects define **semantic colors** that switch automatically:

```css
@theme { --color-surface: var(--surface); }
:root  { --surface: white; }
.dark  { --surface: var(--color-slate-900); }
```

Then you just write `bg-surface`. You'll do this in lesson 12. For now, practice the explicit way. It teaches you which colors pair well.

## From here on: both themes

Lessons 00–09 were light-only designs on purpose, so you could focus on one concept at a time. From **lesson 11 on, every exercise must look intentional in both themes**. That's part of each "Done when".

- The starter pages already adapt (page background, labels). The elements **you** style need their dark side too.
- Until lesson 12, write it explicitly: `bg-white dark:bg-slate-900`.
- From lesson 12 on, prefer **semantic colors** (`bg-surface`, `text-fg`) so most elements need no `dark:` classes at all.

Your earlier light-only exercises are fine as they are. Lesson 12 has a bonus "retrofit" challenge for giving one of them a dark side.

## Exercise 10.1 · Dark-ify a card (OS setting)

File: `exercises/10-dark-mode/1-profile.html`

The profile card is finished for light mode. Add `dark:` classes so it looks **designed** in dark mode, not just inverted. This one uses the default (OS-based) strategy, so flip the viewer's theme button (or use DevTools emulation) to test.

**Done when:** both modes look intentional: readable text contrast, no harsh pure-white areas in dark mode, accent colors adjusted, borders visible but subtle.

## Exercise 10.2 · Theme toggle

Files: `exercises/10-dark-mode/2-toggle.html` and `exercises/10-dark-mode/toggle.css`

This exercise uses **its own stylesheet** (`toggle.css`) so you can change the dark-mode strategy without affecting other exercises.

1. In `toggle.css`, add the `@custom-variant` line so `dark:` reacts to a `.dark` class.
2. In the HTML, write the small script so the button toggles `.dark` on `<html>` and **remembers** the choice in `localStorage`.
3. Style the page for both modes.
4. Make the button show ☀️ in dark mode and 🌙 in light mode **using only classes** (two spans, `dark:hidden` / `hidden dark:inline`).

**Done when:** clicking toggles the theme, the choice survives a page reload, and the icon swaps without JS touching it.
