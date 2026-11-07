// EXERCISE 13.1: Component functions (see lessons/13-reuse.md)
// Rule: every class name must appear in full somewhere in this file. No `bg-${x}-600`!

const products = [
  { name: "Mechanical Keyboard", price: 149, inStock: true, color: "from-sky-200 to-indigo-300" },
  { name: "Wireless Mouse", price: 59, inStock: true, color: "from-emerald-200 to-teal-300" },
  { name: "4K Monitor", price: 499, inStock: false, color: "from-amber-200 to-orange-300" },
  { name: "USB-C Hub", price: 39, inStock: true, color: "from-pink-200 to-rose-300" },
  { name: "Desk Lamp", price: 79, inStock: false, color: "from-violet-200 to-fuchsia-300" },
];

function Button({ label, variant = "primary", size = "md", disabled = false }) {
  // TODO: base classes + variant map + size map
  return `<button ${disabled ? "disabled" : ""}>${label}</button>`;
}

function Badge({ text, tone = "neutral" }) {
  // TODO: tone map: success | warning | neutral
  return `<span>${text}</span>`;
}

function ProductCard(product) {
  // TODO: card with a gradient image area (bg-linear-to-br + product.color), name, price,
  // a Badge ("In stock" / "Sold out") and a Button ("Add to cart" / disabled "Notify me")
  return `<div>${product.name}</div>`;
}

// Demo of all button variants & sizes
document.getElementById("buttons").innerHTML = [
  Button({ label: "Primary" }),
  Button({ label: "Secondary", variant: "secondary" }),
  Button({ label: "Danger", variant: "danger" }),
  Button({ label: "Small", size: "sm" }),
  Button({ label: "Disabled", disabled: true }),
].join("");

// TODO: render every product into #grid with a loop (map + join)
document.getElementById("grid").innerHTML = ProductCard(products[0]);
