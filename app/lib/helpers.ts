import type { LinkDescriptor } from "@remix-run/node"

export const createStyleLink = (href: string): LinkDescriptor => ({
    rel: "stylesheet",
    href,
})
