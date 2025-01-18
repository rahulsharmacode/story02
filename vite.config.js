import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./stories/index.js"), // Entry point for the library
      name: "MyUILibrary", // Global name for UMD builds
      fileName: (format) => `my-ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Exclude peer dependencies
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true, // Optional: Generate source maps
  },
});
