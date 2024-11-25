import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@data": "/src/data",
      "@hooks": "/src/hooks",
      "@layout": "/src/components/layout",
      "@pages": "/src/components/pages",
      "@ui": "/src/components/ui",
    },
  },
});
