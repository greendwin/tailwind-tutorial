# 09 · Positioning, layering & overflow

## Position

```
static (default)  relative  absolute  fixed  sticky
```

- `relative`: stays in the flow, but becomes the **anchor** for absolutely positioned children.
- `absolute`: removed from the flow, positioned against the nearest positioned ancestor.
- `fixed`: positioned against the viewport (doesn't scroll).
- `sticky`: normal until it hits a `top-*` offset while scrolling, then sticks.

## Offsets

```
top-0 right-0 bottom-0 left-0
inset-0         all four = 0 (fill the parent)
inset-x-0 / inset-y-0
top-4  -top-2  top-1/2  top-full  (spacing scale, fractions, negatives)
start-0 / end-0  logical (RTL-aware)
```

**Badge on a corner:**

```html
<div class="relative">
  <img class="size-12 rounded-full" />
  <span class="absolute -top-1 -right-1 size-4 rounded-full bg-red-500 ring-2 ring-white"></span>
</div>
```

**Center an absolute element:** `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`, or put `grid place-items-center` on an `absolute inset-0` wrapper.

## Z-index & stacking

```
z-0 z-10 z-20 z-30 z-40 z-50  z-auto  z-[100]  -z-10
isolate      creates a new stacking context (contains child z-indexes)
```

A tip for sanity: use a small fixed set, e.g. dropdowns `z-10`, sticky header `z-20`, modal `z-50`.

## Overflow

```
overflow-hidden  overflow-auto  overflow-scroll  overflow-visible
overflow-x-auto  overflow-y-auto
overscroll-contain   stop scroll chaining (modals, sidebars)
```

`overflow-hidden` on a rounded card clips images to the rounded corners.

## Media helpers

```
aspect-square  aspect-video  aspect-[4/3]   keep a ratio
object-cover   object-contain   object-center/top   how an <img> fills its box
```

**Image card:** `<img class="aspect-video w-full object-cover">`.

## Display & visibility

```
block inline-block inline hidden contents
invisible   (hidden but still takes space)
sr-only     visually hidden, still read by screen readers
```

## Exercise 09.1 · Media card with overlays

File: `exercises/09-positioning/1-overlay-card.html`

Build a "listing card" (think Airbnb):

- image area with fixed aspect ratio, rounded corners that clip the image
- a ♥ button **top-right** inside the image
- a "Superhost" badge **top-left** inside the image
- a dark **gradient overlay at the bottom** of the image with the price in white text on top of it
- the host's avatar **overlapping** the bottom edge of the image (half on the image, half below)

**Done when:** all four overlays are anchored correctly and stay put when you change the card width.

## Exercise 09.2 · Sticky header & modal

File: `exercises/09-positioning/2-sticky-modal.html`

1. Make the header **stick** to the top when scrolling, with a semi-transparent white background and blur (`bg-white/80 backdrop-blur`) so content shows through.
2. Make the table of contents in the sidebar **sticky** too (it should stay visible while the article scrolls past).
3. The modal markup is at the bottom. Style it as a **fixed full-screen backdrop** (dark, semi-transparent) with the dialog **centered**. It should sit above the sticky header. A tiny script adds a `data-open` attribute when it opens, so make the modal hidden by default and visible only with `data-open` (remember `data-*` variants from lesson 07).

> **Why not just toggle `hidden`?** If an element has both `hidden` and `grid`, they set the same CSS property, and which one wins depends on the order of the **stylesheet**, not the order in your `class` attribute. Never put two conflicting utilities on one element. Use a variant (`hidden data-open:grid`) so only one applies at a time.

**Done when:** you scroll and the header + TOC stick; the modal covers everything, including the header.
