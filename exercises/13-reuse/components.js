// EXERCISE 13.1: Component functions (see lessons/13-reuse.md)
// Rule: every class name must appear in full somewhere in this file. No `bg-${x}-600`!

const products = [
  {
    name: "Mechanical Keyboard", price: 149, inStock: true,
    color: "from-sky-200 to-indigo-300 ",
  },
  {
    name: "Wireless Mouse", price: 59, inStock: true,
    color: "from-emerald-200 to-teal-300",
  },
  {
    name: "4K Monitor", price: 499, inStock: false,
    color: "from-amber-200 to-orange-300",
  },
  {
    name: "USB-C Hub", price: 39, inStock: true,
    color: "from-pink-200 to-rose-300",
  },
  {
    name: "Desk Lamp", price: 79, inStock: false,
    color: "from-violet-200 to-fuchsia-300",
  },
];

const buttonVariants = {
  primary: `
    bg-indigo-600 text-white
    dark:bg-indigo-700 dark:text-slate-200
    not-disabled:hover:bg-indigo-500
    dark:not-disabled:hover:bg-indigo-800
    disabled:bg-indigo-400 disabled:text-indigo-200
    dark:disabled:bg-indigo-900 dark:disabled:text-indigo-200/50
  `,
  secondary: `
    bg-slate-300 text-slate-950
    dark:bg-slate-800 dark:text-slate-200
    not-disabled:hover:bg-slate-300/80
    dark:not-disabled:hover:bg-slate-800/80
    disabled:bg-slate-300/50 disabled:text-slate-400
    dark:disabled:bg-slate-800/50 dark:disabled:text-slate-200/50
  `,
  danger: `
    bg-red-600 text-white
    dark:bg-red-700
    not-disabled:hover:bg-red-500
    dark:not-disabled:hover:bg-red-800
    disabled:bg-red-400 disabled:text-red-200
    dark:disabled:bg-red-900 dark:disabled:text-red-200/50
  `,
};

const buttonSizes = {
  md: "px-3 py-1 rounded-lg",
  sm: "px-2 py-1 rounded-md text-sm",
};

function Button({ label, variant = "primary", size = "md", disabled = false }) {
  return `
    <button 
      ${disabled ? "disabled" : ""}
      class="
        cursor-pointer
        disabled:cursor-not-allowed not-disabled:active:scale-98 transition
        ${buttonVariants[variant]} ${buttonSizes[size]}
      "
    >
      <span>${label}</span>
    </button>
  `;
}

const badgeTones = {
  neutral: `
    text-slate-900 bg-slate-50/50 border border-slate-50/25
    dark:text-slate-50 dark:bg-slate-700/80 dark:border-slate-800/80
  `,
  success: `
    text-emerald-900 bg-emerald-50/50 border border-emerald-50/25
    dark:text-emerald-50 dark:bg-emerald-700/80 dark:border-emerald-800/80
  `,
  warning: `
    text-orange-900 bg-orange-50/50 border border-orange-50/25
    dark:text-orange-50 dark:bg-orange-700/80 dark:border-orange-800/80
  `,
}

function Badge({ text, tone = "neutral" }) {
  return `
    <span class="
        px-3 py-1 rounded-full
        text-xs font-semibold uppercase tracking-wide
        flex items-center justify-center
        ${badgeTones[tone]}
    ">
      ${text}
    </span>
  `;
}

function ProductCard(product) {
  const badge = Badge({
    text: product.inStock ? "In stock" : "Sold out",
    tone: product.inStock ? "success" : "warning",
  });

  const btn = Button({
    label: product.inStock ? "Add to cart" : "Notify me",
    variant: product.inStock ? "primary" : "secondary",
    disabled: !product.inStock,
  });

  return `
    <div class="
        p-4 rounded-lg
        flex flex-col items-start gap-2
        text-slate-900
        ring-1 ring-slate-800/20 shadow-lg
        dark:ring-2 dark:ring-white/20
        bg-linear-to-br ${product.color}
        relative *:relative
        before:absolute before:inset-0 before:rounded-[inherit] 
        dark:before:bg-black/10
    ">
      <div class="text-xl font-semibold">${product.name}</div>
      <div class="mb-2 text-5xl font-semibold">$${product.price}</div>
      ${badge} 
      <div class="mt-2 w-full flex *:flex-1">
        ${btn}
      </div>
    </div>
  `;
}

// Demo of all button variants & sizes
document.getElementById("buttons").innerHTML = [
  Button({ label: "Primary" }),
  Button({ label: "Secondary", variant: "secondary" }),
  Button({ label: "Danger", variant: "danger" }),
  Button({ label: "Small", size: "sm" }),
  Button({ label: "Disabled", disabled: true }),
  Button({ label: "Secondary", variant: "secondary", disabled: true }),
  Button({ label: "Danger", variant: "danger", disabled: true }),
].join("");

document.getElementById("grid").innerHTML = products.map(ProductCard).join("");
