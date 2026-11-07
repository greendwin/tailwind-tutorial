// Light/dark theme for the course shell. Stored mode: "light" | "dark" | unset (= follow the OS).
// Each page's <head> has a tiny inline snippet that applies the stored mode before first paint.

const media = matchMedia("(prefers-color-scheme: dark)");
const order = ["system", "light", "dark"];
const label = { system: "◐ Auto", light: "☀ Light", dark: "☾ Dark" };

function get() {
  try {
    return localStorage.getItem("theme") ?? "system";
  } catch {
    return "system";
  }
}

function apply() {
  const mode = get();
  document.documentElement.classList.toggle("dark", mode === "dark" || (mode === "system" && media.matches));
}

const buttons = new Set();
const render = () => buttons.forEach((b) => (b.textContent = label[get()]));

media.addEventListener("change", apply);
// Keep other open tabs (dashboard + lesson) in sync
addEventListener("storage", (e) => e.key === "theme" && (apply(), render()));

export function themeToggle(button) {
  buttons.add(button);
  button.title = "Theme: auto → light → dark";
  button.onclick = () => {
    const next = order[(order.indexOf(get()) + 1) % order.length];
    try {
      next === "system" ? localStorage.removeItem("theme") : localStorage.setItem("theme", next);
    } catch {}
    apply();
    render();
  };
  render();
}
