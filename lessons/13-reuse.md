# 13 · Reuse & real-world patterns

"But I'll repeat `rounded-lg bg-indigo-600 px-4 py-2 …` on every button!" This lesson covers how real projects deal with that.

## 1. Repetition is often fine

- Inside one file, use **multi-cursor editing** (Ctrl+D / Alt+Click in VS Code) to change many elements at once.
- Lists should be **loops**, not copy-paste: in React, Vue, Svelte, templates, or plain JS, the markup exists once.

## 2. Components are the real abstraction

In a real app, a "button" is a component in your framework, and the classes live **inside** it, once:

```js
// plain JS version, same idea in React/Vue/Svelte
function Button({ label, variant = "primary" }) {
  return `<button class="${base} ${variants[variant]}">${label}</button>`;
}
```

That's why Tailwind fits so well with component frameworks, and why `@apply` is rarely needed.

## 3. Never build class names dynamically

Tailwind **scans your files as plain text**. It never runs your code. So this **doesn't work**:

```js
// ❌ Tailwind never sees "bg-red-500" anywhere in your source
const cls = `bg-${color}-500`;
```

Always write **complete class names** and pick between them:

```js
// ✅ every full class name appears in the source
const colors = {
  red: "bg-red-500 text-white",
  green: "bg-green-500 text-white",
};
const cls = colors[color];
```

This "variant map" pattern is the foundation of every Tailwind component library.

If values truly come from data (e.g. a user-chosen hex color), use a **CSS variable** instead:

```html
<div style="--accent: #ff3366" class="bg-(--accent)">
```

## 4. Conflicting classes

```html
<button class="px-4 px-8">   <!-- which wins? -->
```

**Not** the one that comes last in the attribute. It's whichever comes last in the generated **stylesheet**, which you don't control. So when a component accepts extra classes from outside, conflicts are a real problem. Solutions:

- design components so that callers don't need to override (pass `variant`/`size` props instead)
- in JS projects, the library **`tailwind-merge`** (`twMerge("px-4", "px-8")` → `"px-8"`) resolves conflicts, often combined with `clsx` in a helper called `cn()`
- the `!` suffix forces importance: `px-8!` (escape hatch, use rarely)

## 5. Class order & readability

Long class lists are easier to scan in a consistent order. **`prettier-plugin-tailwindcss`** sorts them automatically (layout → spacing → typography → color → states). Most teams use it.

Breaking very long lists onto multiple lines (e.g. grouping states) is also fine.

## 6. When `@apply` *is* right

- styling markup you can't add classes to (CMS HTML, Markdown, third-party widgets)
- tiny global primitives in a non-component project

## Exercise 13.1 · Component functions

Files: `exercises/13-reuse/1-components.html` and `exercises/13-reuse/components.js`

`components.js` has data for products and stub functions. Implement:

1. `Button({ label, variant, size })` with variants `primary | secondary | danger` and sizes `sm | md`, using variant maps with **complete** class strings
2. `Badge({ text, tone })` with tones `success | warning | neutral`
3. `ProductCard(product)` that uses `Badge` and `Button`, and renders all products into the grid with a **loop**

**Done when:** every product card renders, out-of-stock products show a warning badge and a disabled secondary button, and no class name in your JS is built by string concatenation of parts.

## Exercise 13.2 · Fix the broken classes

Files: `exercises/13-reuse/2-dynamic.html`, `exercises/13-reuse/dynamic.js`, `exercises/13-reuse/dynamic.css`

This exercise has its own stylesheet that only scans its own files. The script should render colored "status pills", but **none of the colors show up**. Find out why, then fix it **without** using `@source inline` (that's a workaround, not a fix).

Then handle the last requirement: the "custom" pill should take its color from user data (`#ff6b35`) using a CSS variable.

**Done when:** all pills are colored and you can explain the root cause in one sentence.
