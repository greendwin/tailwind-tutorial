// EXERCISE 13.2: Fix the broken classes (see lessons/13-reuse.md)

const statuses = [
  { label: "Live", color: "emerald" },
  { label: "Building", color: "amber" },
  { label: "Failed", color: "rose" },
  { label: "Queued", color: "slate" },
  { label: "Custom", hex: "#ff6b35" }, // TODO: color this one from `hex` via a CSS variable
];

function Pill({ label, color }) {
  const classes = `bg-${color}-100 text-${color}-800 ring-${color}-600/20`;
  return `<span class="rounded-full px-3 py-1 text-sm font-medium ring-1 ${classes}">${label}</span>`;
}

document.getElementById("pills").innerHTML = statuses.map(Pill).join("");
