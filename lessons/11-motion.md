# 11 · Transitions, transforms & animation

## Transitions

A transition animates the change between two states (e.g. normal → hover).

```
transition            common properties (colors, opacity, shadow, transform…)
transition-colors     only colors (cheapest)
transition-opacity  transition-transform  transition-shadow  transition-all
duration-150 duration-300 duration-500 …   (any number of ms: duration-250)
ease-linear ease-in ease-out ease-in-out
delay-100 …
```

```html
<button class="bg-indigo-600 transition-colors duration-200 hover:bg-indigo-500">
```

Put the transition classes on the **element itself**, not inside `hover:`. They describe *how* it changes; the `hover:` classes describe *what* changes.

## Transforms

```
scale-95 scale-105 scale-x-110     rotate-45 -rotate-12
translate-x-4 -translate-y-1 translate-y-full
skew-x-6     origin-top-left
rotate-x-45 rotate-y-12 perspective-near transform-3d   (3D!)
```

Transforms don't affect layout, so they're smooth and cheap to animate. The classic "lift on hover" card:

```html
<div class="transition hover:-translate-y-1 hover:shadow-lg">
```

And "press" feedback: `active:scale-95`.

## Built-in animations

```
animate-spin     loading spinners
animate-ping     radar ping (notification dots)
animate-pulse    skeleton loaders
animate-bounce   "scroll down" arrows
```

## Custom animations

Define keyframes and register an `--animate-*` theme variable in your CSS. Then `animate-wiggle` exists as a class:

```css
@theme {
  --animate-wiggle: wiggle 0.4s ease-in-out infinite;
  @keyframes wiggle {
    0%, 100% { transform: rotate(-4deg); }
    50% { transform: rotate(4deg); }
  }
}
```

## Enter animations: `starting:`

`starting:` styles an element's **initial** state when it appears (uses CSS `@starting-style`). Combine it with a transition for fade-ins **without JS**:

```html
<div class="opacity-100 transition duration-500 starting:opacity-0 starting:translate-y-2">
```

Works great with `popover` and `<dialog>` and with elements switching from `hidden` to visible.

## Respect reduced motion

Some users get motion sickness. They set "reduce motion" in their OS:

```
motion-safe:animate-bounce      only animate if the user is OK with motion
motion-reduce:transition-none   turn transitions off for them
```

## Exercise 11.1 · Micro-interactions

File: `exercises/11-motion/1-interactions.html`

Add motion to each element as described in the file:

1. a button with smooth color change on hover and a "press" scale on click
2. a card that lifts and gains a bigger shadow on hover
3. an icon button whose arrow slides right on hover (`group` + translate)
4. a "settings" gear that rotates on hover
5. a toggle switch: the knob slides when the hidden checkbox is checked (`peer-checked:translate-x-*`)
6. an accordion `<details>` whose chevron rotates when open (`open:` / `group-open:`)

**Done when:** every transition feels smooth (not instant, not sluggish, usually 150–300ms) and each uses the narrowest transition property that works.

## Exercise 11.2 · Loading states & a custom animation

Files: `exercises/11-motion/2-loading.html` and `exercises/11-motion/motion.css`

1. Build a **skeleton loader** for a card (gray shapes where avatar, title, and text lines will be) using `animate-pulse`.
2. Build a **spinner** inside a button ("Saving…") with `animate-spin` (a bordered circle with one transparent side works great).
3. A **notification dot** with a ping effect behind it (two stacked dots: one `animate-ping`).
4. In `motion.css`, define a custom `--animate-*` with your own `@keyframes` (e.g. a wiggle or shake) and use it on the 🔔 bell.
5. Wrap the infinite animations in `motion-safe:`.

**Done when:** all four are animated, and your custom animation class works.
