# 01 · The utility-first idea

## The big shift

In classic CSS you **invent a class name** and then write styles for it:

```html
<div class="alert">Saved!</div>
<style>
  .alert { padding: 1rem; background: #ecfdf5; color: #065f46; border-radius: 0.5rem; }
</style>
```

With Tailwind you **compose small, single-purpose classes** right in the markup:

```html
<div class="p-4 bg-emerald-50 text-emerald-800 rounded-lg">Saved!</div>
```

Each class does about one thing:

| Class | CSS it generates |
| --- | --- |
| `p-4` | `padding: calc(var(--spacing) * 4)` → 1rem |
| `bg-emerald-50` | `background-color: var(--color-emerald-50)` |
| `text-emerald-800` | `color: var(--color-emerald-800)` |
| `rounded-lg` | `border-radius: var(--radius-lg)` → 0.5rem |

**Why people like it:**
- You don't spend time naming things (`.card-inner-wrapper-2`).
- Styles live next to the markup, so you can see what an element looks like without hunting through CSS files.
- The CSS stops growing: `p-4` is generated once no matter how many elements use it.
- The built-in scales (spacing, colors, font sizes) keep a design consistent.

**The common objection** is "this is ugly, it's like inline styles!" It isn't the same as inline styles. Utilities use a **design system** (fixed scales), and they can do what inline styles can't: hover states, media queries, dark mode. You'll see those soon.

## Reading class names

Most utilities follow a `property-value` pattern:

```
text-center      → text-align: center
text-lg          → font-size (a size value)
text-sky-600     → color (a color value)
bg-white         → background-color: white
font-bold        → font-weight: 700
p-6 / px-6 / pt-6 → padding / horizontal padding / top padding
mt-2             → margin-top
border           → 1px solid border
rounded-md       → border-radius
```

Notice that `text-` covers several properties (alignment, size, color). Tailwind tells them apart by the value. Hover over a class in VS Code to confirm what it does.

## Preflight: the reset you need to know about

Tailwind includes a CSS reset called **Preflight**. It means:

- `h1`–`h6` look like **plain text** (no big bold headings by default)
- `ul`/`ol` have **no bullets** and no padding
- margins are removed from `p`, headings, etc.
- borders are reset so that `border` alone gives a clean 1px solid line
- images are `display: block`

This is deliberate. You style everything explicitly, so nothing surprises you later. If your `<h1>` looks tiny, that's why: give it `text-3xl font-bold`.

## The color palette

Colors are named `{color}-{shade}`. Shades go from `50` (lightest) to `950` (darkest):

```
slate gray zinc neutral stone   (grays with different tints)
red orange amber yellow lime green emerald teal
cyan sky blue indigo violet purple fuchsia pink rose
```

Plus `black`, `white` and `transparent`. A good rule of thumb for text on a light background: `-900`/`-800` for headings, `-600`/`-500` for secondary text, `-50`/`-100` for tinted backgrounds.

## Try it in the playground

Open `/playground/` and paste:

```html
<button class="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg">
  Click me
</button>
```

Now play: change `indigo` to `rose`, `px-4` to `px-8`, `rounded-lg` to `rounded-full`. Get comfortable with the edit → save → see loop.

## Exercise 01.1 · Style a notification

File: `exercises/01-utility-first/1-notification.html`

The file contains an unstyled notification. Make it look like a polished "success" toast:

- light green tinted background with dark green text
- comfortable padding on all sides, rounded corners
- a thin border slightly darker than the background
- the title bold; the description smaller and a bit lighter than the title
- a small gap between title and description

**Done when:** it reads clearly as a success message, and the color shades go together (bg light, border mid-light, text dark, all the same hue).

## Exercise 01.2 · Translate CSS to utilities

File: `exercises/01-utility-first/2-translate.html`

The file has a `<style>` block with a hand-written `.badge` and `.tag` class. Your job:

1. Recreate both looks using **only Tailwind classes** on the elements.
2. Delete the `<style>` block and the old class names.
3. The page should look (almost) identical before and after.

Use IntelliSense hover to find the utilities whose CSS matches. For example, `padding: 0.25rem 0.75rem` is `py-1 px-3`.

**Done when:** no custom CSS remains and both elements look the same as the original.
