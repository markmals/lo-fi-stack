import unocss from "unocss/vite"
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
    viteFinal: config => mergeViteConfig(config, { plugins: [unocss()] }),
})
