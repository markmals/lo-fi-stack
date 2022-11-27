import type { LinksFunction, MetaFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import { createStyleLink } from "./lib/helpers"
import tailwind from "./styles/tailwind.css"

export const links: LinksFunction = () => [createStyleLink(tailwind)]

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Remix Lo-Fi Stack",
    viewport: "width=device-width,initial-scale=1",
})

export default function App() {
    return (
        <html lang="en">
            <head>
                <base href="https://markmals.github.io/lo-fi-stack/" />
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
