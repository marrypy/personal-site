import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Relative base: works for custom domain (marrykassa.com) and github.io/<repo>/.
// Dev server still uses "/" for simpler local URLs.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : "./"
}))
