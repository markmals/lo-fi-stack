import { StorybookConfig } from "@storybook/react-vite"

export default {
    stories: ["../app/components/**/*.@(story|stories).@(tsx|mdx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    core: {
        disableTelemetry: true,
    },
} satisfies StorybookConfig
