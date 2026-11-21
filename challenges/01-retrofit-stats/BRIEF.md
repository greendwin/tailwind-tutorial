# Challenge 01: Retrofit your stat cards

**Kind:** retrofit (not a recreate-this). **Difficulty:** medium.
**Lessons exercised:** 04 (colors & surfaces), 10 (dark mode), 12 (semantic tokens with `@theme inline`).

Your 04.2 stat cards were built light-only. Make them work in **both themes** using semantic color tokens,
the way a real codebase would, instead of sprinkling `dark:` on every element.

## Files

- `target.html`: an untouched copy of your finished 04.2. It's the "before". Reading its source is fine this time.
- `mine.html`: the same copy, wired to its own `retrofit.css`. Edit this one.
- `retrofit.css`: Tailwind entry for `mine.html` only, with TODOs for the tokens.

## How to view dark mode

Dark here follows the OS (`prefers-color-scheme`). Switch your OS theme, or in DevTools:
**Rendering → Emulate CSS media feature prefers-color-scheme → dark**.

## Constraints

- Tokens are named by **role**, not by color: `bg-surface`, `text-muted`, not `bg-white`, `text-slate-600`.
- Neutral colors (page, cards, text, muted text, card edges) come from tokens and switch automatically.
- Accent colors (the green/red badges, tinted icon tiles, the featured gradient) may use `dark:`, or tokens if you prefer.
- Keep the light theme looking the same as it does now.

## Done when

- [ ] Both themes look intentional: dark cards read as raised above the dark page (elevation, not just "inverted").
- [ ] Main text, muted labels and card edges are readable/visible in both themes.
- [ ] Badges and icon tiles still read as soft tinted pills in dark (not glaring, not invisible).
- [ ] The featured card still stands out in dark without blinding.
- [ ] `dark:` classes left in `mine.html`: **single digits**.

When you're done, say **`check challenge 01`**.
