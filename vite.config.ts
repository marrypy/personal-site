import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// GitHub Project Page is served at /<repo>/ ; dev server uses "/" for simpler URLs.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : "/personal-site/"
}))
