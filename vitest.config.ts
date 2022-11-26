import preact from "@preact/preset-vite"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig({
    plugins: [preact(), tsconfigPaths()],
    test: {
        globals: true,
        environment: "happy-dom",
        setupFiles: ["./test/setup-test-env.ts"],
    },
})
