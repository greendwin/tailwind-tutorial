# 05 · Flexbox

Flexbox lays children out in **one direction**, a row or a column. It's the tool for navbars, toolbars, media objects, and centering.

## The essentials

```
flex            display: flex (children in a row)
inline-flex     same, but the container itself is inline
flex-col        children in a column
flex-row-reverse / flex-col-reverse
gap-4           space between children (gap-x-4 / gap-y-2 for each axis)
flex-wrap       let children wrap onto new lines
```

## Alignment: the two axes

For `flex` (a row), the **main axis** is horizontal and the **cross axis** is vertical. With `flex-col` they swap.

```
justify-*   main axis    justify-start  justify-center  justify-end  justify-between  justify-around  justify-evenly
items-*     cross axis   items-start    items-center    items-end    items-stretch (default)  items-baseline
self-*      one child overrides items-*: self-center, self-end …
```

**Perfect centering:**
```html
<div class="flex items-center justify-center h-64">I'm centered</div>
```
(Or with grid: `grid place-items-center`.)

## How children grow and shrink

```
flex-1       grow AND shrink, ignore its own size (takes the remaining space)
flex-auto    grow and shrink, based on its content size
flex-none    never grow or shrink
grow / grow-0      shrink / shrink-0
basis-64 / basis-1/3     starting size
```

The two you'll use constantly:
- `flex-1` on the element that should **fill the leftover space** (search input, main content)
- `shrink-0` on things that **must not get squished** (avatars, icons, buttons)

## The `ml-auto` trick

An auto margin absorbs all free space. To push one item (and everything after it) to the end:

```html
<nav class="flex items-center gap-4">
  <a>Logo</a> <a>Docs</a> <a>Blog</a>
  <button class="ml-auto">Sign in</button>
</nav>
```

## The `min-w-0` gotcha

Flex children won't shrink below their content's width by default. So a `truncate` text inside a `flex-1` child **won't truncate**. Fix it by adding `min-w-0` to the flex child:

```html
<div class="flex items-center gap-3">
  <img class="size-10 shrink-0 rounded-full" />
  <div class="min-w-0 flex-1">
    <p class="truncate">A very long name that should be cut off…</p>
  </div>
</div>
```

## Order

`order-first`, `order-last`, `order-2`… changes the visual order without changing the HTML. Use it carefully, because screen readers follow the HTML order.

## Exercise 05.1 · Navbar

File: `exercises/05-flexbox/1-navbar.html`

Build a top navigation bar:

- logo on the left, then the nav links next to it with even spacing
- the search input **fills the remaining space** between the links and the right side
- "Sign in" text link and "Sign up" button on the far right
- everything vertically centered; the bar has padding, a bottom border, and a white background
- give the search input some visual styling (padding, ring or border, rounded)

**Done when:** you resize the window and the search box is the only thing that stretches or shrinks.

## Exercise 05.2 · Comment thread

File: `exercises/05-flexbox/2-comments.html`

Style the list of comments as "media objects":

- avatar on the left (fixed size, round, **never shrinks**)
- on the right: a header row with the **name** and **time** on the left and a "⋯" menu button pushed to the far right
- the comment text below the header
- the long-name comment must **truncate** the name instead of breaking the layout
- the reply should be indented under its parent comment

**Done when:** you shrink the window narrow and the avatars stay perfect circles and the long name truncates.

## Exercise 05.3 · Page with sticky footer

File: `exercises/05-flexbox/3-page-layout.html`

The page has a header, a short main section, and a footer. Right now the footer floats in the middle of the screen. Make it so:

- the page is **at least** as tall as the viewport
- the footer sits at the bottom of the window when content is short
- when content is long, the footer comes after it naturally (try duplicating the paragraphs to check)

Use flexbox only, with no `position` utilities.

**Done when:** both short and long content cases work.
