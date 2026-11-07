# 02 · Spacing & sizing

## The spacing scale

Tailwind v4 has a single base unit: `--spacing: 0.25rem` (4px). A number after a spacing utility **multiplies** that unit:

| Class | Value | px |
| --- | --- | --- |
| `p-1` | 0.25rem | 4 |
| `p-2` | 0.5rem | 8 |
| `p-4` | 1rem | 16 |
| `p-6` | 1.5rem | 24 |
| `p-8` | 2rem | 32 |
| `p-12` | 3rem | 48 |
| `p-0.5` / `p-1.5` / `p-2.5` | half steps | 2 / 6 / 10 |

In v4 **any whole number works** (`p-13`, `mt-37`), but the design will feel more consistent if you stick to a few: 1, 2, 3, 4, 6, 8, 12, 16, 24.

Quick conversion: **px ÷ 4 = class number**. 24px → `6`.

## Padding & margin

```
p-4    all sides        m-4
px-4   left + right     mx-4
py-4   top + bottom     my-4
pt-4   top              mt-4    (also pr, pb, pl / mr, mb, ml)
ps-4   inline start     ms-4    (logical: respects right-to-left text)
```

- `mx-auto` centers a block that has a width, the classic centering trick.
- Negative margins use a leading dash: `-mt-4`.
- `m-0` / `p-0` reset.

## Space between children

Two ways to put space *between* siblings without adding margin to each one:

```html
<!-- gap: works with flex & grid (preferred) -->
<div class="flex flex-col gap-4">...</div>

<!-- space-y: adds margin to children; works in normal block flow -->
<div class="space-y-4">...</div>
```

Prefer `gap` when the parent is flex or grid. `space-y` is handy for simple stacks of blocks.

## Width & height

```
w-64        fixed: 16rem (spacing scale)
w-1/2       50%     w-2/3, w-3/4 …
w-full      100%    h-full
w-screen    100vw   h-screen  (h-dvh is better on mobile)
w-auto      auto
w-fit       fit-content
size-10     width AND height = 2.5rem (avatars, icons!)
```

## Min & max

`max-w-*` is how you keep content readable. It uses named container sizes:

```
max-w-xs  20rem   max-w-md  28rem   max-w-xl  36rem   max-w-3xl  48rem
max-w-sm  24rem   max-w-lg  32rem   max-w-2xl 42rem   max-w-7xl  80rem
max-w-prose  ~65 characters (ideal for reading)
```

A pattern you'll write a thousand times: **centered, readable column**

```html
<main class="mx-auto max-w-3xl px-4">...</main>
```

Also: `min-h-screen`, `min-w-0` (important for flex children with long text; comes up in lesson 05).

## Arbitrary values: the escape hatch

When the scale doesn't have what you need, use square brackets:

```html
<div class="w-[37px] top-[117px] bg-[#bada55] grid-cols-[1fr_2fr]">
```

- Spaces become underscores: `grid-cols-[1fr_2fr]`.
- CSS variables: `w-(--sidebar-width)` is shorthand for `w-[var(--sidebar-width)]`.
- Use them **sparingly**. If you need the same odd value often, it belongs in the theme (lesson 12).

## Box sizing

Preflight sets `box-sizing: border-box` on everything, so padding and borders are **included** in `w-*`/`h-*`. A `w-64 p-4` box is still 16rem wide.

## Exercise 02.1 · Pricing card spacing

File: `exercises/02-spacing-sizing/1-pricing-card.html`

The card has colors and fonts already, but **no spacing or sizing at all**. It's cramped. Add:

- a fixed card width around 20rem, centered horizontally on the page, with some top margin on the page
- generous inner padding
- clear vertical rhythm: more space between groups (price block, feature list, button) than within a group
- the feature list items evenly spaced
- the button full-width with comfortable vertical padding

**Done when:** it looks like a card you'd see on a real pricing page. You should be able to explain why each spacing value is the size it is.

## Exercise 02.2 · Build to spec

File: `exercises/02-spacing-sizing/2-spec.html`

The comment in the file has a pixel spec from a "designer". Turn every measurement into utilities. Use the **scale** where the value fits it, and an **arbitrary value** only where it doesn't.

**Done when:** every measurement in the spec is implemented, and you used arbitrary values only for numbers that aren't on the scale.
