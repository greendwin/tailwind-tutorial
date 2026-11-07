# 03 · Typography

## Font size

```
text-xs   0.75rem    text-xl   1.25rem    text-4xl  2.25rem
text-sm   0.875rem   text-2xl  1.5rem     text-5xl  3rem
text-base 1rem       text-3xl  1.875rem   … up to text-9xl
text-lg   1.125rem
```

Each size comes with a **matching line-height**, so `text-sm` alone already reads well. Override line-height with:

- the slash shorthand: `text-sm/6` (size sm, line-height `6` = 1.5rem), `text-lg/7`, `text-base/relaxed`
- or separately: `leading-tight`, `leading-normal`, `leading-relaxed`, `leading-6`, `leading-none`

## Weight, family, style

```
font-light font-normal font-medium font-semibold font-bold font-extrabold font-black
font-sans  font-serif  font-mono
italic  not-italic
```

A common professional move: **don't use too many weights**. `font-medium` + `font-semibold` + `font-bold` covers almost everything.

## Color & emphasis

Hierarchy comes from **color contrast more than size**:

```html
<h3 class="font-semibold text-slate-900">Title</h3>
<p class="text-slate-600">Body copy</p>
<p class="text-sm text-slate-500">Meta info · 3 min read</p>
```

## Letter spacing & case

```
tracking-tighter tracking-tight tracking-normal tracking-wide tracking-wider tracking-widest
uppercase lowercase capitalize normal-case
```

Two classic pairings:
- Big headings look better slightly tighter: `text-5xl font-bold tracking-tight`
- Small labels look better uppercase and wide: `text-xs font-semibold uppercase tracking-wider`

## Alignment & wrapping

```
text-left text-center text-right text-justify
text-balance   evens out line lengths in headings (no lonely last word)
text-pretty    avoids orphans in paragraphs
whitespace-nowrap  break-words  break-all
```

## Overflowing text

```
truncate       one line, cuts off with "…" (needs a constrained width)
line-clamp-3   up to 3 lines, then "…"
```

`truncate` = `overflow-hidden text-ellipsis whitespace-nowrap`. It only works if the element can't grow wider than its container. In flex layouts, that usually means adding `min-w-0` to the flex child.

## Decoration

```
underline  no-underline  line-through
decoration-sky-500  decoration-2  decoration-wavy  underline-offset-4
```

Nice link style: `underline decoration-sky-400/50 underline-offset-4 hover:decoration-sky-500` (you'll learn `hover:` and `/50` soon).

## Lists

Preflight removes bullets. Bring them back with `list-disc` / `list-decimal` and indent with `pl-5` (or `list-inside`). Color the markers with `marker:text-sky-500`.

## Long-form content

For blog posts or CMS content, where you don't control the HTML, there's the official **typography plugin** with its `prose` class. It styles all child elements nicely. This course's lesson viewer uses it! You'll set it up yourself in lesson 12. For now, style text by hand to learn the basics.

## Exercise 03.1 · Blog article

File: `exercises/03-typography/1-article.html`

Style the unstyled article so it reads like a quality blog post:

- a narrow, centered reading column (around 65 characters per line)
- a small uppercase category label above the title (tinted color, wide tracking)
- a big, bold, slightly tight title that wraps nicely (no single orphan word)
- meta line (author · date · read time) smaller and muted
- body paragraphs with relaxed line height and space between them
- an `h2` subheading clearly distinct from body text
- the list with visible bullets and colored markers
- the link visibly styled (underline with offset, colored)
- the blockquote: italic, left border, indented, muted

**Done when:** the hierarchy is clear at a glance: label → title → meta → body. Show someone the screen and ask what to read first.

## Exercise 03.2 · Taming long text

File: `exercises/03-typography/2-long-text.html`

There are three cards with problems caused by long content. Fix each one using what you've learned:

1. A filename that should stay on **one line** and end with "…"
2. A description that should show **at most 2 lines**
3. A URL with no spaces that currently **overflows** the card. Make it wrap.

**Done when:** none of the three cards overflow at any window width (resize to check).
