import type { Config } from "tailwindcss"

export default {
    content: ["./app/**/*.{ts,tsx,md,mdx}"],
    theme: { extend: {} },
    plugins: [],
    darkMode: "media",
} satisfies Config
