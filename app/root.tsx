import type { LinksFunction, MetaFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import reset from "@unocss/reset/tailwind.css"
import { createStyleLink } from "./lib/helpers"
import uno from "./styles/uno.css"

export const links: LinksFunction = () => [createStyleLink(uno), createStyleLink(reset)]

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "New Premix App",
    viewport: "width=device-width,initial-scale=1",
})

export default function App() {
    return (
        <html lang="en">
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
