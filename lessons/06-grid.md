# 06 · Grid

Flexbox handles one direction. **Grid** handles rows *and* columns at the same time. Use it for card grids, galleries, and page skeletons.

## Basics

```
grid              display: grid
grid-cols-3       3 equal columns (repeat(3, minmax(0, 1fr)))
grid-rows-2       2 equal rows
gap-6             gap between cells (gap-x-*, gap-y-*)
```

```html
<div class="grid grid-cols-3 gap-6">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>
```

## Spanning

```
col-span-2      take 2 columns          row-span-2      take 2 rows
col-span-full   take the whole row
col-start-2 col-end-4   place explicitly (lines are numbered from 1)
```

## Custom tracks with arbitrary values

The real power: define any column template.

```html
<!-- fixed sidebar + fluid content -->
<div class="grid grid-cols-[16rem_1fr]">

<!-- header / content / footer rows -->
<div class="grid min-h-screen grid-rows-[auto_1fr_auto]">

<!-- as many columns as fit, each at least 12rem: responsive WITHOUT breakpoints -->
<div class="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
```

Remember: spaces → underscores inside brackets.

## Alignment

```
place-items-center   center every item in its cell (both axes)
justify-items-* / items-*      all items: horizontal / vertical
justify-self-* / self-*        one item
content-* / justify-content-*  align the whole grid inside a taller/wider container
```

## Auto flow

```
grid-flow-row (default)  grid-flow-col  grid-flow-dense
```

`grid-flow-dense` back-fills holes left by spanning items. Great for "bento" galleries.

## Subgrid

`grid-cols-subgrid` / `grid-rows-subgrid` lets a child grid reuse its parent's tracks. It's useful for aligning card internals across a row (e.g. all card buttons line up). An advanced but very satisfying feature.

## Flex or grid?

- Content decides the size, one direction → **flex** (navbar, button group, tags)
- Layout decides the size, two directions → **grid** (card grid, page skeleton, form layouts)

## Exercise 06.1 · Bento gallery

File: `exercises/06-grid/1-bento.html`

Turn the 11 tiles into a "bento box" layout:

- 4 columns, consistent gaps, a fixed row height (hint: `auto-rows-[8rem]` or similar)
- tile **A** spans 2 columns and 2 rows
- tile **D** spans 2 columns
- tile **F** spans 2 rows
- the label inside each tile centered both ways

You should get a solid 4×4 rectangle. Then **break it on purpose**: move tile **B** to the end of the HTML and watch a hole appear. Add `grid-flow-dense` to the grid and see the browser back-fill the hole.

**Done when:** the grid is a solid rectangle, A/D/F have the requested spans, and you can explain what `grid-flow-dense` changed.

## Exercise 06.2 · App shell

File: `exercises/06-grid/2-app-shell.html`

Build a classic dashboard skeleton with **one grid** on the outer wrapper:

- full viewport height
- a top bar spanning the full width
- a fixed-width sidebar on the left (~16rem)
- the main content area filling the rest
- main contains a card grid that fits **as many 14rem+ cards as the width allows** (auto-fill/minmax), with no breakpoints

**Done when:** resizing the window changes the number of card columns automatically, and the sidebar width never changes.
