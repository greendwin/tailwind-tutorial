# Progress

Maintained by Claude after each check. Status values: `todo`, `in progress`, `done`.
The dashboard reads the **Status** column. Keep the table format intact.

| ID | Exercise | Status | Notes |
| --- | --- | --- | --- |
| 00.1 | 00-start-here/1-hello | done | Clean: swapped color (no conflicting slate class), underline, italic. |
| 01.1 | 01-utility-first/1-notification | done | Same-hue green scale (100 bg / 300 border / 800+700 text), colored border, mb-2 gap. |
| 01.2 | 01-utility-first/2-translate | done | All mappings right, style block gone. Missed the display: inline-block translation (vertical padding on inline spans). |
| 02.1 | 02-spacing-sizing/1-pricing-card | done | Nested space-y hierarchy, max-w-xs mx-auto, w-full button, spaced list. Polish: vertical padding (py-4) smaller than horizontal (px-8). |
| 02.2 | 02-spacing-sizing/2-spec | done | h-33 (no arbitrary needed), flex-1, size-14, overflow-clip, -mx-8 -mt-8 bleed. Fixed swapped stat padding. Optional: stack number/label in stats. |
| 03.1 | 03-typography/1-article | done | Fixed text-bold→font-bold (unknown classes fail silently), muted blockquote, hoisted list/leading styles to parents. Later darkened h1 (slate-800). |
| 03.2 | 03-typography/2-long-text | done | truncate, line-clamp-2, wrap-anywhere (v4.1 overflow-wrap). Clean first try. |
| 04.1 | 04-colors-surfaces/1-buttons | done | Fixed all 3 (shared weight, solid red-500 danger, shadow-md sky glow) and switched borders→rings so all are 32px tall. Polish left: mixes gray (Secondary) with slate (page). |
| 04.2 | 04-colors-surfaces/2-stats | done | Took 3 rounds. Same-hue soft-badge pills (green/red bg+border+text), sized icon squares, number/label hierarchy, ring-slate-600/5. Then applied polish: white pill text + bg-white/10 icon on featured card. Featured label now text-white/80. Fully polished. |
| 05.1 | 05-flexbox/1-navbar | done | flex-1 on search, items-center, no justify-between. Recheck: swapped **:whitespace-nowrap for shrink-0, nav gap-6, matched rounded-lg. Chose min-w-30 floor on search (deliberate; overflow at narrow widths is a lesson 08 job). |
| 05.2 | 05-flexbox/2-comments | done | 4 rounds. Key struggle: min-w-0 chain (tried max-w-80 first; fixed with grow min-w-0 on column). ml-auto menu, ml-10 reply (avatar 8 + gap 2), removed dead gap-4. Needed a hint for the indent. Then applied polish: reply in nested ul inside parent li, parent li space-y-4 (tighter than list's space-y-6), ml-10 moved to the nested ul. |
| 05.3 | 05-flexbox/3-page-layout | done | First try: body min-h-screen flex flex-col, main flex-1. Used min-h (not h) so long content works. Mentioned min-h-dvh + grid-rows-[auto_1fr_auto] alternative. |
| 06.1 | 06-grid/1-bento | done | First try. Spans + auto-rows right; then polished: `*:` centering, inherited text styles hoisted to grid. |
| 06.2 | 06-grid/2-app-shell | done | 5 rounds. Final: h-dvh grid-cols-[16rem_1fr] grid-rows-[auto_1fr], col-span-full header, overflow-auto main (bonus), auto-fill minmax(14rem,1fr) cards. Struggles: viewport-relative sidebar at first; auto-row stretching; invalid track values (`content`, empty `fit-content()`) silently dropped. Lesson: verify arbitrary values in DevTools. |
| 07.1 | 07-states/1-form | done | 2 rounds. Round 1 relied on UA focus outline + unstyled file button; fixed both with explicit focus rings and file: pill. |
| 07.2 | 07-states/2-cards | done | 2 rounds. Round 1 recolored the category label instead of the title; fixed, plus added group-focus-visible reveal and a ring on the selected plan. |
| 08.1 | 08-responsive/1-product | done | 3 rounds. Mobile-first nav swap and md:flex layout right from the start. Missed: h1 size, page max-width (then aligned header inner wrapper with main, nicely), phone grid columns (base class = phone took a nudge). |
| 08.2 | 08-responsive/2-container | done | 2 rounds. @container on wrappers, @sm breakpoint > sidebar. Fixed the collapsing image with @sm:flex-2 / @sm:flex-3 on both copies (identical now). Asked about stretch vs aspect-ratio in the row: explained align-self / cover-image tradeoff. |
| 09.1 | 09-positioning/1-overlay-card | todo | |
| 09.2 | 09-positioning/2-sticky-modal | todo | |
| 10.1 | 10-dark-mode/1-profile | todo | |
| 10.2 | 10-dark-mode/2-toggle | todo | |
| 11.1 | 11-motion/1-interactions | todo | |
| 11.2 | 11-motion/2-loading | todo | |
| 12.1 | 12-customizing/1-brand | todo | |
| 12.2 | 12-customizing/2-extras | todo | |
| 13.1 | 13-reuse/1-components | todo | |
| 13.2 | 13-reuse/2-dynamic | todo | |
| 14.1 | 14-capstone/1-landing | todo | |

## Challenges

| Challenge | Status | Notes |
| --- | --- | --- |

## Session log

<!-- Claude: one line per session, newest first. Date, what was covered, what to pick up next. -->
- 2026-11-09: Checked 05.1 (done, first try), rechecked after polish. Checked 05.2: 4 rounds, done (min-w-0 chain was the lesson), then polished. Checked 05.3 (done, first try). Lesson 05 complete. Next: lesson 06, exercise 06.1 bento.
- 2026-11-09: Checked 06.1 (done, first try), rechecked after polish. Next: 06.2 app shell.
- 2026-11-11: Rechecked 07.2: done (title group-hover, keyboard reveal via group-focus-visible). Lesson 07 complete. Next: lesson 08, exercise 08.1 responsive product.
- 2026-11-11: Checked 08.1: 3 rounds, done (base class = phone layout was the sticking point). Next: 08.2 container queries.
- 2026-11-11: Checked 08.2: 2 rounds, done. Lesson 08 complete. Next: lesson 09, exercise 09.1 overlay card.
- 2026-11-11: Checked 07.2: in progress, title group-hover missing; selected state subtle.
- 2026-11-11: Rechecked 07.1: done (explicit focus rings on every control, file: pill). Next: 07.2 plan picker.
- 2026-11-10: Checked 07.1: in progress, only the file: button styling left.
- 2026-11-09: Checked 06.2: 5 rounds, done (auto-row stretching + valid grid track keywords were the lesson). Lesson 06 complete. Next: lesson 07, exercise 07.1 form.
- 2026-11-08: Checked 04.2: 3 rounds, done (soft-badge hue matching was the sticking point). Lesson 04 complete. Next: lesson 05, exercise 05.1 navbar.
- 2026-11-08: Checked 04.1: in progress, then rechecked, done (rings for equal heights). Next: 04.2 stat cards.
- 2026-11-07: Checked 03.2 (done, first try). Lesson 03 complete. Next: lesson 04, exercise 04.1 buttons.
- 2026-11-07: Checked 03.1: in progress, then rechecked, done. Next: 03.2 long text.
- 2026-11-07: Checked 02.1, 02.2: in progress, then rechecked, both done. Next: lesson 03, exercise 03.1 article.
- 2026-11-07: Checked 01.1, 01.2 (both done). Next: lesson 02, exercise 02.1 pricing card.
- 2026-11-07: Checked 00.1 (done). Next: lesson 01, exercise 01.1 notification.
