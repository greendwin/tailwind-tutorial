// EXERCISE 13.2: Fix the broken classes (see lessons/13-reuse.md)

const statuses = [
  { label: "Live", color: "emerald" },
  { label: "Building", color: "amber" },
  { label: "Failed", color: "rose" },
  { label: "Queued", color: "slate" },
  { label: "Custom", hex: "#ff6b35" },
];

const pillColors = {
  emerald: `
    bg-emerald-100 text-emerald-800 ring-emerald-600/20
    dark:bg-emerald-800 dark:text-emerald-100 dark:ring-emerald-100/20
  `,
  amber: `
    bg-amber-100 text-amber-800 ring-amber-600/20
    dark:bg-amber-800 dark:text-amber-100 dark:ring-amber-100/20
  `,
  rose: `
    bg-rose-100 text-rose-800 ring-rose-600/20
    dark:bg-rose-800 dark:text-rose-100 dark:ring-rose-100/20
  `,
  slate: `
    bg-slate-100 text-slate-800 ring-slate-600/20
    dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-100/20
  `,
}

const pillAccentColor = `
  bg-(--accent) text-white ring-(--accent)/50
  dark:bg-(--accent)/20 dark:text-(--accent) dark:ring-(--accent)/40
`;

function Pill({ label, color, hex }) {
  let classes = [];
  let style = ""
  if (color != null) {
    classes.push(pillColors[color]);
  }
  if (hex != null) {
    style = `style="--accent: ${hex}"`
    classes.push(pillAccentColor);
  }

  return `
    <span ${style} class="
      rounded-full px-3 py-1 text-sm font-medium ring-1
      ${classes.join(" ")}
    ">
      ${label}
    </span>
  `;
}

document.getElementById("pills").innerHTML = statuses.map(Pill).join("");
