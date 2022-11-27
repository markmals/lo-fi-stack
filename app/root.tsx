import type { LinksFunction, MetaFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import { createStyleLink } from "./lib/helpers"
import tailwind from "./styles/tailwind.css"

export const links: LinksFunction = () => [createStyleLink(tailwind)]

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Remix Lo-Fi Stack",
    viewport: "width=device-width,initial-scale=1",
    "og:title": "Remix Lo-Fi Stack",
    "og:description":
        "The Remix Stack for deploying to Fly.io with Preact, Tailwind, PostCSS, Firebase, testing, linting, formatting, and more",
    "og:image":
        "https://user-images.githubusercontent.com/39869007/204083687-88e86af6-c69b-4465-9212-4b6d8b634872.png",
    "og:type": "website",
    "og:url": "https://markmals.github.io/lo-fi-stack",
})

export default function App() {
    return (
        <html lang="en" class="bg-white dark:bg-zinc-900">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}
