import forms from "@tailwindcss/forms"
import type { Config } from "tailwindcss"

export default {
    content: ["./app/**/*.{ts,tsx,md,mdx}", "./components/**/*.{ts,tsx,md,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat"],
                sans: [
                    "'Inter Var'",
                    "Inter",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "avenir next",
                    "avenir",
                    "segoe ui",
                    "helvetica neue",
                    "helvetica",
                    "Cantarell",
                    "Ubuntu",
                    "roboto",
                    "noto",
                    "arial",
                    "sans-serif",
                ],
                mono: [
                    "JetBrains Mono",
                    "ui-monospace",
                    "SFMono-Regular",
                    "Andale Mono",
                    "Ubuntu Mono",
                    "Menlo",
                    "Consolas",
                    "Monaco",
                    "Liberation Mono",
                    "Lucida Console",
                    "monospace",
                ],
            },
            screens: {
                "one-col": { raw: "(min-width: 50em)" },
                "two-col": { raw: "(min-width: 72em)" },
                // => @media (min-width: 72em) { ... }
            },
        },
    },
    plugins: [forms()],
    darkMode: "media",
} satisfies Config
