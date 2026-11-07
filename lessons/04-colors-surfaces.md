# 04 · Colors, borders & surfaces

## Color utilities

Any palette color works with any color property:

```
bg-sky-500       background-color
text-sky-500     color
border-sky-500   border-color
ring-sky-500     ring (box-shadow outline) color
outline-sky-500  outline-color
fill-sky-500 / stroke-sky-500   SVG
decoration-sky-500  placeholder:text-sky-500  …
```

## Opacity modifier

Add `/{0-100}` to any color for transparency:

```html
<div class="bg-black/50">      50% black overlay
<div class="bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/20">  soft tinted badge
```

The "soft badge" pattern above (10% background, 20% ring, strong text) is used everywhere in modern UIs. Memorize it.

`opacity-50` is different: it fades the **whole element**, including its text and children.

## Borders

```
border          1px on all sides       border-2 border-4 border-0
border-t        top only               border-x border-y border-b-2 …
border-slate-200                       color
border-dashed border-dotted
divide-y divide-slate-200   borders BETWEEN children (lists!)
```

> **v4 gotcha:** a bare `border` uses `currentColor` (the text color) by default. In v3 it was gray-200. So always pair `border` with a color like `border-slate-200`.

## Radius

```
rounded-xs  rounded-sm  rounded-md  rounded-lg  rounded-xl  rounded-2xl  rounded-3xl  rounded-full
rounded-t-lg  rounded-l-xl  rounded-tr-2xl  …per side/corner
```

`rounded-full` on a square makes a circle; on a button it makes a pill.

## Shadows & rings

```
shadow-2xs shadow-xs shadow-sm shadow-md shadow-lg shadow-xl shadow-2xl shadow-none
shadow-sky-500/30     colored shadow (glow)
inset-shadow-sm       inner shadow
ring-1 ring-2 ring-slate-900/10   a "border" drawn with box-shadow
```

Rings don't change layout (unlike borders), and they stack with shadows. A very common card style:

```html
<div class="rounded-xl bg-white shadow-sm ring-1 ring-slate-900/5">
```

## Gradients

```html
<div class="bg-linear-to-r from-indigo-500 to-pink-500">
<div class="bg-linear-to-br from-sky-400 via-violet-500 to-fuchsia-500">
<div class="bg-linear-45 from-amber-300 to-rose-500">        angle
<div class="bg-radial from-white to-sky-200">                radial
```

Gradient **text**: `bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent`.

## Exercise 04.1 · Button gallery

File: `exercises/04-colors-surfaces/1-buttons.html`

Style each button to match its label. All buttons share the same size/padding/font, and only the "skin" differs:

1. **Primary**: solid brand color, white text, subtle shadow
2. **Secondary**: white with gray ring/border and dark text
3. **Soft**: very light tint background, strong tint text (the soft-badge pattern)
4. **Outline**: transparent background, 2px colored border, colored text
5. **Danger**: solid red
6. **Pill**: like primary but fully rounded
7. **Gradient**: gradient background with a colored glow shadow
8. **Disabled look**: primary but faded (use opacity)

Don't worry about hover yet (lesson 07).

**Done when:** all 8 are visually distinct but clearly part of the same family (same height, same font).

## Exercise 04.2 · Stat cards

File: `exercises/04-colors-surfaces/2-stats.html`

Build a row of 3 stat cards (the layout is given):

- card: white, rounded, soft shadow plus faint ring
- a small colored icon square in each card (soft tint background), with a different color per card
- the big number, a label, and a trend pill ("+12%") using green/red soft-badge styles
- the third card should be "featured": gradient background with white text

**Done when:** it looks like a dashboard header from a real SaaS app.
