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
| 09.1 | 09-positioning/1-overlay-card | done | 2 rounds. Avoided the overflow-hidden clipping trap; fixed flat overlay -> gradient, rounded-b-xl, explicit avatar anchoring. |
| 09.2 | 09-positioning/2-sticky-modal | done | First try. hidden data-open:flex done right. Polished: header z-20 under modal z-50, p-4 gutter on backdrop. |
| 10.1 | 10-dark-mode/1-profile | done | All polish applied: elevation fixed, avatar ring in sync, white/10 card edge + dividers, stat labels match subtitle. |
| 10.2 | 10-dark-mode/2-toggle | done | Theme init in the head (no flash), classList.toggle click handler; reload keeps both choices. Had a missing IIFE call during refactor, found it from a hint. |
| 11.1 | 11-motion/1-interactions | done | 3 rounds; dark side (switch track contrast, knob colour transition) was the lesson |
| 11.2 | 11-motion/2-loading | done | 2 rounds. Custom --animate-bell + @keyframes in @theme; motion-safe on every infinite animation (spinner too, own call); dark blocks slate-700. Polished: skeleton bars are just max-w-* (grid stretch fills the width), typo and overflow-hidden gone. |
| 12.1 | 12-customizing/1-brand | done | 5 rounds. Brand scale derived from slate lightness via relative oklch (chroma capped). Semantic surface/fg/muted via @theme inline + :root/.dark, toggle with persisted choice. Struggled with: brand text/tints are theme roles; one fixed shade can't serve both surfaces (fixed with dark: per element, then refactored into a semantic accent token). |
| 12.2 | 12-customizing/2-extras | done | All 4 pieces work, both themes via semantic tokens (only dark: is prose-invert). Explanation half right: "new concept" = @utility, but put UI-kit presets in @utility and token variants in templates. Clarified: @theme for tokens, @utility for single-purpose CSS, components for multi-element bundles. 13.1 should reinforce this. |
| 13.1 | 13-reuse/1-components | done | 2 rounds. Sold-out = disabled secondary; dark: inside badge tones + explicit disabled: colors per variant; template literals; card dims in dark via before: overlay. Both polish items applied (dark:before: order, before:rounded-[inherit]). |
| 13.2 | 13-reuse/2-dynamic | done | 2 rounds. Root cause stated correctly (scanner reads text, never runs JS). Color-keyed map with dark: inside, --accent pill. Polish round: join(" ") fixed; custom pill light now solid bg-(--accent) but with text-white/80 (~2.3:1, white can't pass on this orange; dark text would be ~6:1). |
| 14.1 | 14-capstone/1-landing | todo | |

## Challenges

| Challenge | Status | Notes |
| --- | --- | --- |

## Session log

<!-- Claude: one line per session, newest first. Date, what was covered, what to pick up next. -->
- 2026-11-21: Rechecked 13.2 after polish: still done. Solid accent fill in light is right, but white/80 text is still ~2.3:1; dark text suggested. Next: 14.1 capstone.
- 2026-11-21: Rechecked 13.2: done (2 rounds). Map + dark variants + root cause in. Custom-pill light contrast left as polish. Lesson 13 complete. Next: 14.1 capstone.
- 2026-11-20: Checked 13.2 (in progress, code + served CSS): fix is correct, all classes generated. Dark variants, light-theme custom pill contrast, and root-cause sentence left.
- 2026-11-20: Rechecked 13.1 after polish: dark:before: order + rounded-[inherit] overlay. Still done. Next: 13.2.
- 2026-11-20: Rechecked 13.1: done (2 rounds). Both fixes in, plus per-variant disabled colors. Next: 13.2 dynamic classes.
- 2026-11-20: Checked 13.1 (in progress, code-only review): component maps solid; sold-out button variant (secondary) and badge dark tones left.
- 2026-11-18: Rechecked 12.2 after polish: hocus now base-500 token (AA in both themes), glow recolored sky-200 + slate-900 (outer halo may smudge in light, unverified visually). Still done. Next: 13.1.
- 2026-11-18: Checked 12.2: done. Four pieces correct, both themes via tokens. Explanation of @utility vs component needed correcting (UI-kit presets belong in components, token variants in @theme). Lesson 12 complete. Next: 13.1 components.
- 2026-11-15: Rechecked 12.1 after polish: logo/eyebrow moved to semantic text-accent (:root brand-600 / .dark brand-500), dead text color on emoji tiles removed. Still done.
- 2026-11-15: Rechecked 12.1: done (round 5). Dark eyebrow 4.6:1, icon tiles deep green in dark. Next: 12.2 or "challenge me: retrofit".
- 2026-11-15: Rechecked 12.1 (in progress, round 4): gamut cap + dark Start free done; dark eyebrow (3.0:1) and pale icon squares in dark unchanged.
- 2026-11-15: Rechecked 12.1 (in progress, round 3): light contrast all fixed; dark eyebrow regressed to 3.3:1, icon squares still pale in dark. Named the pattern: brand text/tint are theme roles.
- 2026-11-15: Rechecked 12.1 (in progress): scale + font fixed; dark eyebrow fixed but light eyebrow and Start free label now low contrast, soft pills bright in dark.
- 2026-11-15: Checked 12.1 (in progress): token architecture right; brand scale gaps, dark brand contrast and h1 faux bold left.
- 2026-11-11: Checked 09.2 (done, first try). Rechecked after polish. Lesson 09 complete. Next: lesson 10, exercise 10.1 dark profile.
- 2026-11-11: Checked 10.1 (done, first try). Rechecked twice; all polish applied. Next: 10.2 theme toggle.
- 2026-11-12: Checked 10.2 (in progress): script and variant solid; two small fixes left (card border colour, icon order).
- 2026-11-12: Rechecked 10.2 (done), then again after moving init to the head. Lesson 10 complete. Next: lesson 11, exercise 11.1 micro-interactions (both themes from here on).
- 2026-11-12: Rechecked 10.2 after classList.toggle refactor: back to in progress (head script not running, reload loses choice).
- 2026-11-12: Rechecked 10.2: IIFE call fixed, reload verified for dark and light. Done. Lesson 10 complete. Next: 11.1 micro-interactions.
- 2026-11-12: Checked 11.1 (in progress): all six motions correct with the right transition scopes; switch checked colour and dark mode for card/switch/accordion/link left.
- 2026-11-13: Rechecked 11.1 (in progress): card/accordion dark + switch checked colour fixed; arrow link dark, dark track contrast and knob colour transition left.
- 2026-11-13: Rechecked 11.1: done (3 rounds). Next: 11.2 loading states.
- 2026-11-13: Rechecked 11.1 after polish: switch keyboard focus ring via peer-focus-visible added. Still done. Next: 11.2.
- 2026-11-13: Rechecked 11.2 after polish (stretch + max-w only). Still done. Next: 12.1 brand theme.
- 2026-11-13: Rechecked 11.2: done (2 rounds). Lesson 11 complete. Next: lesson 12, exercise 12.1 brand theme.
- 2026-11-13: Checked 11.2 (in progress): animations + custom keyframes right; motion-safe on the other infinite animations and dark skeleton contrast left.
- 2026-11-11: Checked 09.1: 2 rounds, done (static-position luck vs explicit anchoring was the lesson). Rechecked after polish. Next: 09.2 sticky header & modal.
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
