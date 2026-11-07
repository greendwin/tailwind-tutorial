# 07 · States & variants

A **variant** is a prefix that applies a utility only under some condition: `hover:bg-sky-700` means "background sky-700, but only on hover". This is where utilities beat inline styles.

## Interaction states

```
hover:        mouse over
focus:        has focus (clicked or tabbed into)
focus-visible: has focus from the KEYBOARD (use this for focus rings on buttons)
focus-within: the element OR a child has focus
active:       being pressed
disabled:     disabled form element
visited:      visited link
```

A properly interactive button:

```html
<button class="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white
               hover:bg-indigo-500 active:bg-indigo-700
               focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
               disabled:cursor-not-allowed disabled:opacity-50">
  Save
</button>
```

## Stacking variants

Variants can be combined, and they apply **left to right**:

```
dark:hover:bg-slate-800       in dark mode, on hover
md:hover:underline            at md+ widths, on hover
```

## Structural variants

```
first: last: only: odd: even:     position among siblings
first-of-type: empty:
*:p-2          applies to every DIRECT child (set on the parent!)
```

```html
<ul class="divide-y divide-slate-200 *:py-3">
<tr class="odd:bg-white even:bg-slate-50">
```

## Form states

```
placeholder:text-slate-400
invalid:border-red-500        (native validation, e.g. type="email")
user-invalid:border-red-500   only after the user interacts. Usually what you want!
required:  checked:  read-only:  indeterminate:
file:mr-4 file:rounded file:bg-sky-50   style the "Choose file" button
accent-pink-500   color native checkboxes/radios/range
caret-pink-500
```

## Styling based on a parent: `group`

Mark the parent with `group`, then children use `group-hover:` / `group-focus:` etc.:

```html
<a href="#" class="group rounded-lg p-4 hover:bg-sky-50">
  <h3 class="font-semibold group-hover:text-sky-700">Title</h3>
  <span class="opacity-0 group-hover:opacity-100">→</span>
</a>
```

Nested groups? Name them: `group/item` on the parent and `group-hover/item:` on the child.

## Styling based on a sibling: `peer`

Mark an earlier sibling with `peer`, and later siblings react to its state:

```html
<input type="email" class="peer ..." />
<p class="invisible peer-user-invalid:visible text-sm text-red-600">Please enter a valid email.</p>
```

The peer **must come before** the element that uses `peer-*` in the HTML (CSS can only look forward).

## Styling based on descendants: `has-*`

```html
<label class="rounded-lg border p-4 has-checked:border-indigo-600 has-checked:bg-indigo-50">
  <input type="radio" name="plan" /> Pro plan
</label>
```

`has-checked:`, `has-focus:`, `has-[img]:`, `group-has-*`… this replaces lots of JavaScript.

## ARIA & data attributes

```
aria-expanded:rotate-180       when aria-expanded="true"
aria-selected:bg-white
data-active:bg-sky-100         when data-active attribute exists
data-[state=open]:block        when data-state="open"
```

Great when JavaScript toggles an attribute: the styling lives in the classes, and JS only flips state.

## Pseudo-elements

```
before:content-['★'] before:mr-1      after:absolute after:inset-0
selection:bg-pink-200    marker:text-sky-500    first-letter:text-4xl    first-line:uppercase
```

## Exercise 07.1 · Sign-up form

File: `exercises/07-states/1-form.html`

Make the form feel alive:

- inputs: visible ring/border, **strong colored focus state**, placeholder color
- email input: shows red styling **only after the user typed something invalid** (not on page load)
- the error message under email: hidden until the email is invalid (`peer`)
- the "I agree" checkbox colored with your brand color (`accent-*`)
- the submit button: hover, active, focus-visible ring, and a disabled style (try adding `disabled` to it)
- the file input: style its button with `file:` utilities

**Done when:** you can Tab through the whole form with the keyboard and always see where focus is, and invalid email feedback appears only after typing.

## Exercise 07.2 · Plan picker & cards

File: `exercises/07-states/2-cards.html`

Two parts:

1. **Plan picker**: three radio options wrapped in `<label>`s. Style them as selectable cards: the selected card has a colored border + tint (`has-checked:`), and hovering an unselected card gives subtle feedback. Hide the native radio circle visually if you like (`sr-only`), but keep it focusable, and show focus when tabbing (`has-focus-visible:`).
2. **Article cards**: hovering anywhere on a card (`group`) should change the title color, lift the shadow, and reveal a "Read more →" arrow that's invisible otherwise.

**Done when:** the plan picker works with mouse AND keyboard (arrow keys switch radios), with no JavaScript.
