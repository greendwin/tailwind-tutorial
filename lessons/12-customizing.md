# 12 · Customizing Tailwind (in CSS)

In v4, all configuration happens in your CSS file. Here are the main directives.

## `@theme`: design tokens

Theme variables are CSS custom properties in a special block. **Each namespace creates utilities:**

```css
@import "tailwindcss";

@theme {
  --color-brand-50: oklch(0.97 0.02 250);
  --color-brand-500: oklch(0.62 0.19 250);
  --color-brand-900: oklch(0.32 0.1 250);

  --font-display: "Space Grotesk", sans-serif;

  --breakpoint-3xl: 120rem;

  --radius-card: 1.25rem;
  --shadow-card: 0 1px 2px rgb(0 0 0 / 0.05), 0 8px 24px -8px rgb(0 0 0 / 0.15);
}
```

| Namespace | Generates |
| --- | --- |
| `--color-*` | `bg-brand-500`, `text-brand-500`, `border-…`, `ring-…` (every color utility) |
| `--font-*` | `font-display` |
| `--text-*` | `text-huge` (font sizes) |
| `--breakpoint-*` | `3xl:` variant |
| `--radius-*` | `rounded-card` |
| `--shadow-*` | `shadow-card` |
| `--spacing` | the base unit for p/m/w/h/gap… |
| `--animate-*` | `animate-wiggle` (lesson 11) |

**Every theme variable is also a real CSS variable** at runtime: `var(--color-brand-500)` works in arbitrary values (`bg-[var(--color-brand-500)]`), in plain CSS, and in JS.

### Replacing vs extending

Adding variables **extends** the default theme. To **remove** defaults (e.g. use only your colors):

```css
@theme {
  --color-*: initial;      /* wipe the default palette */
  --color-white: #fff;
  --color-ink: #0f172a;
  ...
}
```

### Referencing other variables: `@theme inline`

If a theme value points to another variable (semantic colors for dark mode!), use `inline` so the utility uses the value directly:

```css
@theme inline {
  --color-surface: var(--surface);
  --color-fg: var(--fg);
}
:root { --surface: #fff; --fg: #0f172a; }
.dark { --surface: #0f172a; --fg: #f8fafc; }
```

Now `bg-surface text-fg` adapts to dark mode with **no `dark:` classes**.

### Fonts

Load the font yourself (e.g. Google Fonts `<link>` in HTML or `@import url(...)` at the very top of the CSS), then register it with `--font-*`.

## `@utility`: your own utilities

```css
@utility content-auto {
  content-visibility: auto;
}

/* functional utility, accepts a value: tab-2, tab-4, tab-github */
@utility tab-* {
  tab-size: --value(integer);
}
```

Custom utilities work with every variant automatically: `hover:content-auto`, `md:tab-4`.

## `@custom-variant`: your own variants

```css
@custom-variant theme-retro (&:where([data-theme=retro], [data-theme=retro] *));
@custom-variant hocus (&:hover, &:focus-visible);
```

→ `hocus:bg-sky-100`, `theme-retro:font-mono`.

## `@apply` and component classes (use sparingly)

```css
@layer components {
  .btn {
    @apply rounded-lg px-4 py-2 font-semibold transition-colors;
  }
}
```

It's tempting to recreate "classic CSS" this way. **Don't overuse it:** you lose the benefits from lesson 01, and you're back to naming things. Good uses: styling HTML you don't control (CMS output, third-party widgets), or a tiny set of truly global primitives. For reuse, prefer components in your templating language (lesson 13).

## `@plugin`: official & community plugins

```css
@plugin "@tailwindcss/typography";   /* `prose` class for long-form content */
@plugin "@tailwindcss/forms";        /* nicer default form controls */
```

(Install with npm first. `@tailwindcss/typography` is already installed in this project.)

## `@source`: where to scan

```css
@import "tailwindcss" source(none);   /* disable auto-detection */
@source "../exercises";                /* scan this folder */
@source inline("bg-red-500 text-{sm,lg}");  /* always generate these classes */
@source not "../legacy";                /* never scan this */
```

You've been using this since lesson 00. Look at `src/styles.css`.

## Exercise 12.1 · Brand theme

Files: `exercises/12-customizing/1-brand.html` and `exercises/12-customizing/theme.css`

A small marketing page uses placeholder colors. Create a **brand theme** in `theme.css`:

1. a `brand` color scale (at least 50, 100, 500, 600, 700, 900). Pick your own hue; the [OKLCH picker](https://oklch.com) helps.
2. a display font loaded from Google Fonts and registered as `--font-display`
3. a custom radius `--radius-card` and shadow `--shadow-card`
4. replace every `indigo` in the HTML with your `brand`, use `font-display` on headings, `rounded-card shadow-card` on cards
5. **semantic colors**: `surface` and `fg` (and maybe `muted`) via `@theme inline` that switch with a `.dark` class. Add the `@custom-variant dark` too, and a toggle button so you can test

**Done when:** the page uses no default palette colors for brand elements, and switching theme flips surface/fg without `dark:` classes on those elements.

## Exercise 12.2 · Utilities, variants & plugins

Files: `exercises/12-customizing/2-extras.html` and `exercises/12-customizing/extras.css`

1. Create a `@utility` called `scrollbar-hidden` that hides scrollbars (look up `scrollbar-width: none` and `::-webkit-scrollbar`) and use it on the horizontal chips row.
2. Create a functional `@utility` `text-shadow-glow-*` **or** something of your own invention that takes a value.
3. Create a `hocus` custom variant (hover OR focus-visible) and use it on the links.
4. Add the typography plugin with `@plugin` and render the blog section with `prose` (plus `prose-lg` and a `prose-a:` modifier to color links).

**Done when:** each piece works, and you can explain when you'd choose `@utility` vs a component in a template.
