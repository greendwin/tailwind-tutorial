# Tutor notes: per-exercise check guide

> For Claude. **Spoilers** for the learner. This file says what to look for when the learner asks to check an exercise.
> Each entry: **Must** (required for "done"), **Look for** (good signs / idiomatic choices worth praising), **Common mistakes** (probe for these), **Reference** (one idiomatic approach; never paste it unless the learner explicitly asks for the solution).
> There are many valid solutions. Judge against the lesson's "Done when", not against the reference.

---

## 00.1 · Hello
- **Must:** heading has `text-rose-600` (and no longer `text-slate-900`) + `underline`; paragraph has `italic`.
- **Common mistakes:** leaving both color classes on the heading (conflict). Point at lesson 13's conflict rule early.
- Also confirm the dev server/HMR works (ask if the preview updated). If not: `npm install`, `npm run dev`, check port 5173, and check the file is under `exercises/` (it's what `src/styles.css` scans).

## 01.1 · Notification
- **Must:** tinted green bg (`bg-green-50`/`bg-emerald-50`), dark text of the same hue (`-800`/`-900`), padding, rounded, `border` **with a color** (`border-emerald-200`), bold title, smaller/lighter description, small gap.
- **Look for:** same hue across bg/border/text; `space-y-1` or `mt-1` for the gap; `text-sm` on description; maybe `max-w-md`.
- **Common mistakes:** bare `border` without color (v4 uses currentColor, so a dark border); mixing hues (green bg + emerald text); using `h1` without realizing Preflight resets it.
- **Reference:** `<div class="max-w-md rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">` title `font-semibold`, desc `mt-1 text-sm text-emerald-700`.

## 01.2 · Translate CSS
- **Must:** `<style>` block and `.badge`/`.tag` class names removed.
- **Reference:** badge `inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600`; tag `ml-2 inline-block rounded-md border border-slate-300 bg-slate-100 px-4 py-2 font-mono text-xs tracking-widest text-slate-700 uppercase`.
- **Key mappings to verify:** 0.375rem radius = `rounded-md`; 0.1em = `tracking-widest`; 0.875rem = `text-sm`; 0.75rem = `text-xs`; 9999px = `rounded-full`.
- **Common mistakes:** arbitrary values where scale fits (`px-[0.75rem]`); forgetting `inline-block` (spans are inline already, so vertical padding overlaps; mention it as subtle). Note that `text-sm` also sets line-height, a minor acceptable difference.

## 02.1 · Pricing card
- **Must:** card width (~`w-80`/`max-w-xs`/`max-w-sm`), centered (`mx-auto`), page top margin (`mt-16` on card or `py-16` on body), inner padding (`p-8`), larger gaps between groups than within, evenly spaced list (`space-y-2`/`gap`), full-width button (`w-full`) with `py-2.5`/`py-3`.
- **Look for:** using a flex column with `gap-*` OR `space-y-*` systematically; consistent scale values (e.g. 2/4/8).
- **Common mistakes:** adding margins to every element individually with random values; `w-[320px]` instead of `w-80`; button not full width; centering with `text-center` instead of `mx-auto`.

## 02.2 · Build to spec
- **Must (mapping):** body `p-12`; panel `mx-auto max-w-md p-8 border border-slate-200 rounded-xl`; avatar `size-14 rounded-full`; name `mt-4`; bio `mt-2 max-w-prose`; stats `mt-6 flex gap-3`; stat boxes `py-3 px-2` and equal widths; banner `-mx-8 -mt-8 h-[132px]` (the ONLY arbitrary value).
- **Look for:** `size-14` instead of `w-14 h-14`; `flex-1` on stat boxes (handles gap correctly).
- **Common mistakes:** `w-1/3` on boxes **plus** `gap-3` overflows the row slightly (3×33.3% + gaps > 100%). If they used `w-1/3`, ask them to look closely at the right edge, and steer to `flex-1` or grid. Banner corners poke out of the rounded panel; fix with `overflow-hidden` on panel or `rounded-t-xl` on banner. Using arbitrary values for 48/32/56/12px (all on scale).

## 03.1 · Article
- **Must:** reading column (`max-w-prose` or `max-w-2xl` + `mx-auto` + padding); category label `text-xs/sm font-semibold uppercase tracking-wide(r)` tinted; title `text-4xl+ font-bold tracking-tight text-balance` dark; meta `text-sm text-slate-500`; paragraphs `leading-relaxed`/`text-lg/8` + spacing (`space-y-*` on article or `mt-*`); h2 bigger + bold + top margin; list `list-disc pl-5 marker:text-*`; link underline+offset+color; blockquote `border-l-4 pl-4 italic text-slate-600`.
- **Look for:** `text-balance` on h1, `text-pretty` on paragraphs, `decoration-*/50` on link, more space above h2 than below.
- **Common mistakes:** no bullets (forgot `list-disc`), list without left padding (bullets outside the column), using `prose` (explicitly forbidden here), too many font weights.

## 03.2 · Long text
- **Must:** (1) `truncate` on the filename; (2) `line-clamp-2` on the description; (3) `break-all` or `break-words` (`wrap-break-word` in v4.1+) on the URL.
- **Look for:** knowing that `truncate` works here because the card has a fixed width; for (3), `break-all` always works for unbroken strings; `break-words` alone may not with `overflow-wrap` in some contexts. Discuss the difference.
- **Common mistakes:** `overflow-hidden` alone (cuts without ellipsis); `whitespace-nowrap` + `overflow-hidden` without `text-ellipsis`.

## 04.1 · Buttons
- **Must:** all 8 share size (same `px`/`py`/`text-sm font-semibold`/radius except pill); primary solid + white text + `shadow-xs/sm`; secondary `bg-white ring-1 ring-slate-300 text-slate-900` (or border); soft `bg-indigo-50 text-indigo-700`; outline `border-2 border-indigo-600 text-indigo-600 bg-transparent`; danger `bg-red-600 text-white`; pill `rounded-full`; gradient `bg-linear-to-r from-* to-* shadow-lg shadow-*-500/30`; disabled `opacity-50` (+ `cursor-not-allowed` is a bonus).
- **Common mistakes:** outline button with `border-2` is 2px taller than others. Mention `ring-2 ring-inset` or `border-2 border-transparent` on all buttons as fixes (good teachable moment, not a blocker). Bare `border` without color.

## 04.2 · Stat cards
- **Must:** cards `rounded-xl/2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5`; icon squares `size-10 grid place-items-center rounded-lg bg-*-100` with different hues; big number `text-3xl font-bold`; label muted; trend pills soft-badge green/red (`bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20`); third card `bg-linear-to-br from-* to-* text-white` with adjusted pill/icon (e.g. `bg-white/20`).
- **Look for:** translucent whites on the gradient card (`bg-white/20`, `text-white/80`).
- **Common mistakes:** red pill in the featured card unreadable; keeping `text-slate-*` on gradient card.

## 05.1 · Navbar
- **Must:** header `flex items-center gap-*` + padding + `border-b border-slate-200 bg-white`; nav `flex gap-6`; search `flex-1` (+ `min-w-0` ideally) with styling (`rounded-lg px-3 py-1.5 ring-1 ring-slate-300`); sign in/up at the end.
- **Look for:** `min-w-0` on search; `shrink-0` on logo/buttons; `focus:ring-2` (bonus, ahead of lesson 07).
- **Common mistakes:** using `justify-between` (spreads everything, and the search doesn't fill); `w-full` on input instead of `flex-1`; `ml-auto` on sign-in while search is also `flex-1` (harmless, redundant).

## 05.2 · Comments
- **Must:** each `li` `flex gap-3`; avatar `size-10 shrink-0 rounded-full grid place-items-center` (or `flex items-center justify-center`); right column `min-w-0 flex-1`; header row `flex items-center gap-2`; name `truncate`; menu button `ml-auto shrink-0`; reply indented (`ml-12`/`pl-13`, or nested list); list spacing `space-y-6`.
- **Common mistakes:** **missing `min-w-0`** on the content column → long name doesn't truncate (THE lesson of this exercise; if missing, ask them to shrink the window and describe what happens). Time text also truncating/shrinking: should be `shrink-0`. Avatar squished into an oval (no `shrink-0`).

## 05.3 · Sticky footer
- **Must:** body `flex min-h-screen flex-col` (or `min-h-dvh`), main `flex-1` (or `grow`). No `fixed`/`absolute`.
- **Common mistakes:** `h-screen` (breaks with long content: footer overlaps or content overflows); `fixed bottom-0` footer (forbidden, covers content); putting `flex-1` on the footer.
- Mention the grid alternative: `grid min-h-dvh grid-rows-[auto_1fr_auto]`.

## 06.1 · Bento
- **Must:** container `grid grid-cols-4 gap-4 auto-rows-[8rem]` (any fixed row height); A `col-span-2 row-span-2`; D `col-span-2`; F `row-span-2`; tiles `grid place-items-center` (or flex centering). Result: solid 4×4.
- **Verify understanding:** they moved B to the end, saw a hole at row 1 col 4, and `grid-flow-dense` filled it. Ask them to explain in their own words: dense lets later items fill earlier gaps, so visual order can differ from DOM order (an a11y consideration).
- **Common mistakes:** no row height → row-span tiles look odd/collapsed; `h-*` on each tile instead of `auto-rows`.

## 06.2 · App shell
- **Must:** `#shell`: `grid h-dvh/min-h-screen grid-cols-[16rem_1fr] grid-rows-[auto_1fr]`; header `col-span-2` (or `col-span-full`); cards `grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-6`.
- **Look for:** `overflow-y-auto` on main with `h-dvh` (app-like independent scrolling); `content-start` / `items-start` so cards don't stretch vertically.
- **Common mistakes:** nested flex instead of one grid (works, but not the exercise); forgetting underscores in arbitrary values (`grid-cols-[16rem 1fr]` breaks); using breakpoints for the cards.

## 07.1 · Form
- **Must:** inputs with `rounded-lg ring-1 ring-slate-300` (or border) + `focus:ring-2 focus:ring-indigo-600 focus:outline-none` (or `outline-*` variants) + `placeholder:text-slate-400`; email `peer` + `user-invalid:ring-red-500` (or `border-red-500`); error `<p>` with `hidden peer-user-invalid:block` (or `invisible`/`visible`); checkbox `accent-indigo-600`; button `hover:bg-indigo-500 active:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed`; file input `file:mr-4 file:rounded-md file:border-0 file:bg-indigo-50 file:px-3 file:py-1.5 file:text-indigo-700`.
- **Common mistakes:** using `invalid:` → red on page load because of `required` + empty (exactly why `user-invalid` exists); `peer` placed on the wrong element or error `<p>` before the input; removing outline without replacing it (`outline-none` with no ring = a11y problem; flag it firmly); `focus:` on button instead of `focus-visible:`.

## 07.2 · Plan picker & cards
- **Must (picker):** labels `rounded-xl p-4 ring-1 ring-slate-300 cursor-pointer has-checked:ring-2 has-checked:ring-indigo-600 has-checked:bg-indigo-50 hover:bg-slate-50`; radio `sr-only` (NOT `hidden`, which removes keyboard access) + `has-focus-visible:outline-2 ...` on the label.
- **Must (articles):** `<a>` with `group transition hover:shadow-lg`; title `group-hover:text-sky-700`; "Read more" `opacity-0 group-hover:opacity-100` (+ transition).
- **Common mistakes:** `hidden` on radio inputs breaks arrow-key navigation (test: Tab into group, use arrow keys); using `peer-checked` on label (label *contains* the input, so peer doesn't apply; has-* is the tool); `hover:` on each child instead of `group-hover:`.

## 08.1 · Responsive product
- **Must:** nav `hidden md:flex`; ☰ `md:hidden`; section `grid gap-8 md:grid-cols-2` (or `flex flex-col md:flex-row`); h1 `text-3xl lg:text-5xl`; related grid `grid-cols-2 lg:grid-cols-4`; main `mx-auto max-w-6xl`; button `w-full sm:w-auto`; section spacing (`mt-16`).
- **Common mistakes:** using `sm:` to target phones; `block md:hidden` on button (works, redundant); desktop-first thinking (`grid-cols-4 sm:grid-cols-2`, which is wrong direction); nav both `flex` and `hidden` (conflict! must be `hidden md:flex`).

## 08.2 · Container queries
- **Must:** both `<article>`s identical classes; `@container` on the article (or a wrapper); inner layout `flex flex-col @md:flex-row` (or `@lg`); image `@md:w-2/5` / `@md:aspect-auto`; description `hidden @md:block`.
- **Verify:** sidebar is `w-64` = 16rem, so container breakpoint must be > 16rem (`@xs`=20rem or higher works) so the sidebar copy stays stacked.
- **Common mistakes:** using `md:` (viewport) → sidebar card also flips; putting `@container` on the same element that uses `@md:` (an element can't query itself; children query the nearest ancestor container). If they did `@container` on article AND `@md:flex-row` on article itself, that's the bug.

## 09.1 · Overlay card
- **Must:** image wrapper `relative`; img `aspect-[4/3] w-full rounded-xl object-cover` (wrapper `overflow-hidden rounded-xl` OR rounded img); badge `absolute top-3 left-3`; heart `absolute top-3 right-3`; gradient `absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4` with price; avatar `absolute -bottom-6 left-4` (or `right-4`).
- **Common mistakes:** the classic: `overflow-hidden` on wrapper **clips the overlapping avatar**. Solutions: round the img and gradient separately (no overflow-hidden on wrapper), or put avatar outside the clipping element. Great discussion point. Missing `relative` → overlays fly to page corner.

## 09.2 · Sticky & modal
- **Must:** header `sticky top-0 z-20 bg-white/80 backdrop-blur`; TOC aside `sticky top-20` (offset below header; `self-start` or parent `items-start`, already given); modal `fixed inset-0 z-50 hidden data-open:grid place-items-center bg-black/50 p-4` (or flex centering).
- **Common mistakes:** `hidden grid` both on modal (conflict; lesson explicitly warns); modal `z` lower than header; sticky TOC on `ul` inside aside where aside is the same height as ul (sticky needs room inside its parent, and aside works since it's in the flex row with `items-start`... verify by scrolling); `sticky` with no `top-*`.

## 10.1 · Dark profile
- **Must:** body `dark:bg-slate-950`; card `dark:bg-slate-900` (or `dark:bg-slate-800`) + `dark:ring-white/10`; avatar ring `dark:ring-slate-900` (matches card!); text `dark:text-white`/`dark:text-slate-400`; tags `dark:bg-violet-400/10 dark:text-violet-300 dark:ring-violet-400/30`; dividers `dark:divide-white/10 dark:border-white/10`; Message button `dark:bg-white/10 dark:text-white dark:ring-white/10`; maybe `dark:shadow-none`.
- **Common mistakes:** avatar `ring-white` left as-is (a white ring on dark card, the most common miss); pure white text everywhere (no hierarchy); forgetting dividers/borders.

## 10.2 · Toggle
- **Must:** `toggle.css`: `@custom-variant dark (&:where(.dark, .dark *));`; script: on load read `localStorage.theme` (fallback `matchMedia`), toggle `.dark` on `document.documentElement`; on click toggle + save; icon spans `dark:hidden` / `hidden dark:inline`; page/card colors for both modes.
- **Look for:** applying theme in `<head>` (inline script) to avoid flash of wrong theme (bonus discussion); `color-scheme` (`dark:scheme-dark`) for native controls/scrollbars.
- **Common mistakes:** toggling class on `body` while variant expects it on any ancestor (works with `.dark *`, fine, but `<html>` is conventional); script reads storage but never writes; using `dark:block` for ☀️ when the other is `inline`.

## 11.1 · Micro-interactions
- **Must:** (1) `transition-colors hover:bg-indigo-500 active:scale-95` (if scale is used, needs `transition` not only `transition-colors`; point out); (2) `transition hover:-translate-y-1 hover:shadow-lg`; (3) `group` on `<a>`, arrow `transition-transform group-hover:translate-x-1`; (4) `transition-transform duration-500 hover:rotate-90` (or 180); (5) track `peer-checked:bg-indigo-600 transition-colors`, knob `transition-transform peer-checked:translate-x-5`; (6) `group` on details, chevron `transition-transform group-open:rotate-180`.
- **Common mistakes:** `hover:transition` (transition inside hover: it animates in but snaps back out); `transition-colors` with a transform (no animation of transform); knob translating wrong distance (track w-12=3rem, knob size-5 + left-1 → translate-x-5 = 1.25rem; check visually). `open:` variant applies to the details element itself, so child needs `group-open:`.

## 11.2 · Loading states
- **Must:** skeleton: `animate-pulse` on a wrapper with gray blocks (`rounded-full size-12 bg-slate-200`, `h-4 w-2/3 rounded bg-slate-200`, lines `h-3` with varying widths); spinner `size-4 animate-spin rounded-full border-2 border-white border-t-transparent`; ping: wrapper `absolute -top-1 -right-1 flex size-3` with `absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75` + `relative inline-flex size-3 rounded-full bg-red-500`; `motion.css` `@theme { --animate-wiggle: ...; @keyframes wiggle {...} }` used as `motion-safe:animate-wiggle` on the bell.
- **Common mistakes:** keyframes outside `@theme` (still works, but they're always emitted; inside `@theme` is the documented way and they're only emitted when the animation is used); bell `inline` element so `rotate` doesn't apply (it's `inline-block` already); forgetting `motion-safe:`.

## 12.1 · Brand theme
- **Must:** `theme.css`: `@import url(google font)` **before** `@import "tailwindcss"`; `@theme { --color-brand-50..900; --font-display; --radius-card; --shadow-card; }`; `@custom-variant dark ...`; `@theme inline { --color-surface: var(--surface); --color-fg: var(--fg); }` + `:root {...}` + `.dark {...}`. HTML: no `indigo-*` left; headings `font-display`; cards `rounded-card shadow-card bg-surface`; body `bg-surface text-fg`; a toggle button with script.
- **Common mistakes:** Google font `@import` after tailwind import (CSS ignores @import after other rules); `@theme` (not inline) with `var()` references (works in many cases but can resolve at the wrong scope; explain why `inline` is recommended); defining `--surface` inside `@theme` (then it's a theme var, generates nothing useful); muted text still `text-slate-600` in dark (fine if they add a `muted` token, bonus).

## 12.2 · Extras
- **Must:** `@utility scrollbar-hidden { scrollbar-width: none; &::-webkit-scrollbar { display: none; } }`; a functional utility using `--value(...)`, e.g. `@utility text-glow-* { text-shadow: 0 0 --value(integer)px currentColor; }` or `--value(--color-*)` usage; `@custom-variant hocus (&:hover, &:focus-visible);` used as `hocus:bg-slate-100`; `@plugin "@tailwindcss/typography";` + `<article class="prose prose-lg prose-a:text-indigo-600">`.
- **Note:** v4 has built-in `text-shadow-*` utilities since 4.1, so if they named theirs `text-shadow-*` it may clash. Suggest a distinct name.
- **Discussion to have:** `@utility` = single-purpose, variant-able, belongs in CSS; component (template) = multi-element structure + many classes.

## 13.1 · Components
- **Must:** `Button` with `base` string + `variants = { primary: "...", secondary: "...", danger: "..." }` + `sizes = { sm: "...", md: "..." }` + `disabled:` classes; `Badge` with `tones` map; `ProductCard` uses `Badge`/`Button`, gradient `bg-linear-to-br ${product.color}` (OK: full class names exist in data); `products.map(ProductCard).join("")`.
- **Common mistakes:** `bg-${color}-600` anywhere (the cardinal sin); passing extra classes that conflict with base (e.g. `w-full` fine, `px-2` conflicting with size padding is not); forgetting `disabled` attribute and only styling it.

## 13.2 · Dynamic classes
- **Root cause (learner must articulate):** Tailwind scans source text; `bg-${color}-100` never appears as a complete class, so no CSS is generated.
- **Must:** a map like `{ emerald: "bg-emerald-100 text-emerald-800 ring-emerald-600/20", ... }`; custom pill uses `style="--pill: #ff6b35"` + `bg-(--pill)/15 text-(--pill) ring-(--pill)/30` or similar (opacity modifiers on vars work in v4 via color-mix).
- **Common mistakes:** "fixing" with `@source inline(...)` or safelisting (explicitly disallowed); inline `style="background: ..."` with no Tailwind (acceptable fallback but steer toward the CSS-variable pattern).

## 14.1 · Capstone
- Review **per section** if asked. Check against the lesson's checklist: responsive 360→1440 (mobile-first classes), dark mode toggle with class strategy, custom theme in `capstone.css`, hover + focus-visible on every interactive element, ≥3 transitions + `motion-reduce`, no conflicting utilities (`hidden`+`flex` etc.), no dynamic class names, consistent spacing/radius/weight sets.
- Prefer feedback that names the lesson to revisit ("this is the min-w-0 thing from 05").
- When all sections pass, mark done and suggest challenges.
