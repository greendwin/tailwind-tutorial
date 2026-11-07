# 08 · Responsive design

## Mobile-first breakpoints

Breakpoint variants apply **at that width and up**:

| Prefix | Min width | Typical device |
| --- | --- | --- |
| *(none)* | 0 | phones: your base styles |
| `sm:` | 40rem (640px) | large phones |
| `md:` | 48rem (768px) | tablets |
| `lg:` | 64rem (1024px) | laptops |
| `xl:` | 80rem (1280px) | desktops |
| `2xl:` | 96rem (1536px) | big screens |

```html
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
```

Read it as: "1 column; from `sm` up, 2; from `lg` up, 4".

> **The #1 mistake:** using `sm:` to mean "on phones". `sm:` means "640px **and wider**". Phone styles are the ones **without** a prefix.

Design workflow: build the phone layout first with no prefixes, then widen the window and add `md:`/`lg:` overrides where the layout starts to look stretched.

## Show / hide

```html
<button class="md:hidden">☰ Menu</button>         <!-- only on small screens -->
<nav class="hidden md:flex">...</nav>              <!-- only on md and up -->
```

## Ranges and max-width

```
max-md:     below md only
md:max-xl:  from md up to (not including) xl
min-[900px]:  max-[600px]:   arbitrary breakpoints, one-offs
```

## Responsive everything

Every utility can be prefixed: `text-2xl md:text-4xl`, `p-4 lg:p-8`, `flex-col md:flex-row`, `order-first md:order-none`…

## Container queries

Breakpoints look at the **viewport**. Container queries look at the **parent's** width, which is perfect for components that can be placed in a narrow sidebar *or* a wide main area.

```html
<div class="@container">                       <!-- mark the container -->
  <div class="flex flex-col @md:flex-row">     <!-- react to ITS width -->
```

Container sizes: `@3xs` 16rem, `@2xs` 18rem, `@xs` 20rem, `@sm` 24rem, `@md` 28rem, `@lg` 32rem, `@xl` 36rem, `@2xl` 42rem … Also `@max-md:`, named containers `@container/card` + `@md/card:`.

Note: container breakpoints are **smaller** than viewport ones (`@md` = 28rem, `md:` = 48rem), because components live inside layouts.

## Testing

Use your browser's DevTools device toolbar (Ctrl+Shift+M in Chrome/Edge) or just drag the window edge. The lesson preview pane is also a narrow viewport, so click "open in new tab ↗" to test wide layouts.

## Exercise 08.1 · Responsive product page

File: `exercises/08-responsive/1-product.html`

Make the product page work from 360px to 1440px:

- **phone**: everything stacked; image on top; the mobile "☰" button visible; desktop nav links hidden
- **md+**: nav links visible, "☰" hidden; image and details side by side (image ~half width)
- **lg+**: the "You may also like" grid goes from 2 to 4 columns; page has a max width and is centered
- heading size grows on larger screens
- the "Add to cart" button is full-width on phones, auto-width from `sm` up

**Done when:** you drag the window from narrow to wide and every transition looks intentional.

## Exercise 08.2 · Container-query card

File: `exercises/08-responsive/2-container.html`

The **same** card markup appears twice: once in a narrow sidebar and once in a wide main area. Using **container queries only** (no `sm:`/`md:`):

- in a narrow container: image on top, text below
- in a wide container: image on the left, text on the right, and the description becomes visible (hidden when narrow)

**Done when:** both copies use identical classes, yet look different, and resizing the window (which resizes main) flips the main card's layout at the right point.
