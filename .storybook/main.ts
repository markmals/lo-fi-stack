import preact from "@preact/preset-vite"
import unocss from "unocss/vite"
import tsconfigPaths from "vite-tsconfig-paths"
// import unoConfig from "../unocss.config"
import { defineConfig, mergeViteConfig } from "./storybook-helpers"

export default defineConfig({
    core: { builder: "@storybook/builder-vite", disableTelemetry: true },
    features: { storyStoreV7: true },
    stories: ["../app/components/**/*.@(story|stories).@(ts|tsx|mdx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    viteFinal: config =>
        mergeViteConfig(config, {
            plugins: [preact(), unocss(), tsconfigPaths()],
        }),
})
