# 00 · Start here

Welcome! This is a hands-on Tailwind CSS course. There are no quizzes. You learn by **building small UIs by hand**, then asking Claude to review what you built.

## How the course works

1. **Read a lesson** (you're reading one now). The lesson is on the left; the exercise preview is on the right.
2. **Open the exercise file** in your editor. Its path is shown under the preview, e.g. `exercises/01-utility-first/1-notification.html`.
3. **Write classes** until the result matches the task. Save, and the preview reloads by itself.
4. **Ask Claude to check it.** In Claude Code, from this folder, say something like:
   - `check 01.1`: Claude reads your file, reviews it, and records your progress
   - `hint for 05.2`: you get a nudge, not the answer
   - `explain group-hover`: an explanation with an example
   - `challenge me`: Claude makes a new "recreate this UI" challenge for you
   - `where was I?`: Claude reads `PROGRESS.md` and tells you what's next

Your progress is kept in `PROGRESS.md`. Claude updates it, and the dashboard shows it as colored badges.

## Running the environment

```bash
npm install     # first time only
npm run dev     # starts http://localhost:5173 and opens the dashboard
```

| URL | What it is |
| --- | --- |
| `/` | Dashboard with every lesson and your progress |
| `/lesson.html?l=05-flexbox` | A lesson with its live exercise preview |
| `/playground/` | Free sandbox. Experiment there any time |

## Folder map

```
lessons/        lesson texts (this file)
exercises/      YOUR homework, one folder per lesson
playground/     YOUR sandbox
challenges/     extra "recreate this" challenges Claude generates on request
src/styles.css  the Tailwind entry stylesheet your exercises use
PROGRESS.md     your progress (Claude maintains it)
```

## Editor setup (strongly recommended)

Install the **Tailwind CSS IntelliSense** VS Code extension (VS Code will suggest it). It gives you:

- autocomplete for every class name
- hover on a class to see the CSS it generates, **the single best learning tool here**
- warnings when two classes conflict

> **Tip:** Hovering classes to see their CSS is how you'll learn the naming system fastest. Do it constantly.

## Which Tailwind version?

This course uses **Tailwind CSS v4**. v4 is configured **in CSS**, not in a `tailwind.config.js`. Open `src/styles.css` and you'll see that the whole setup is:

```css
@import "tailwindcss" source(none);
@source "../exercises";
@source "../playground";
```

Tailwind scans the files you point it at, finds class names like `text-sky-600`, and generates **only** the CSS for classes you actually use. Old tutorials (v3) mention `tailwind.config.js`, `content: [...]`, or `@tailwind base;`. Those are outdated, so keep that in mind when googling.

## Exercise 00.1 · Check your setup

File: `exercises/00-start-here/1-hello.html`

1. Run `npm run dev` and open this lesson.
2. In the exercise file, change the heading's color class from `text-slate-900` to `text-rose-600`. Save.
3. The preview on the right should update without a manual refresh.
4. Now add `underline` to the heading's class list, and `italic` to the paragraph.
5. Tell Claude `check 00.1`.

If the preview didn't update, tell Claude what you see and you'll debug it together.
