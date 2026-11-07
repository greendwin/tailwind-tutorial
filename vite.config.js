import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { readdirSync, existsSync } from "node:fs";
import { resolve, relative, sep } from "node:path";

// Lists exercise/challenge HTML files WITHOUT importing them (import.meta.glob would put them
// in the lesson page's module graph, so saving an exercise would reload the whole viewer
// instead of just the preview iframe). Only adding/removing files refreshes the list.
function courseFiles() {
  const id = "virtual:course-files";
  const root = process.cwd();
  const list = (dir, depth) => {
    const abs = resolve(root, dir);
    if (!existsSync(abs)) return [];
    return readdirSync(abs, { withFileTypes: true, recursive: true })
      .filter((e) => e.isFile() && e.name.endsWith(".html"))
      .map((e) => "/" + relative(root, resolve(e.parentPath, e.name)).split(sep).join("/"))
      .filter((p) => p.split("/").length === depth + 2)
      .sort();
  };
  return {
    name: "course-files",
    resolveId: (s) => (s === id ? "\0" + id : null),
    load(s) {
      if (s !== "\0" + id) return;
      return `export const exerciseFiles = ${JSON.stringify(list("exercises", 2))};
export const challengeFiles = ${JSON.stringify(list("challenges", 2))};`;
    },
    // Tailwind registers every scanned HTML file as a dependency of src/styles.css. On save, Vite
    // then sees "HTML change + CSS update" and reloads EVERY open page (incl. the lesson viewer).
    // Instead: mark the stylesheet stale and let Vite reload only the page that changed (the iframe).
    hotUpdate({ file, modules, timestamp }) {
      if (this.environment.name !== "client" || !file.endsWith(".html")) return;
      const top = relative(root, file).split(sep)[0];
      if (!["exercises", "challenges", "playground"].includes(top)) return;
      const seen = new Set();
      for (const mod of modules) this.environment.moduleGraph.invalidateModule(mod, seen, timestamp, true);
      return [];
    },
    configureServer(server) {
      const refresh = (file) => {
        const rel = relative(root, file).split(sep)[0];
        if (!file.endsWith(".html") || !["exercises", "challenges"].includes(rel)) return;
        const mod = server.moduleGraph.getModuleById("\0" + id);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", refresh);
      server.watcher.on("unlink", refresh);
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), courseFiles()],
  server: { port: 5173 },
});
