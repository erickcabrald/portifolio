import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ou o plugin que você usa

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // O nome do repositório deve estar entre barras
});
