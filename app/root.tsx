import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import type { LinksFunction, V2_MetaFunction } from "@vercel/remix"
import tailwind from "./styles/tailwind.css"

export const links: LinksFunction = () => [{ rel: "stylesheet", href: tailwind }]

export const meta: V2_MetaFunction = () => [
    { charSet: "utf-8" },
    { title: "Remix Lo-Fi Stack" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { property: "og:title", content: "Remix Lo-Fi Stack" },
    {
        property: "og:description",
        content:
            "The Remix Stack for deploying to Vercel with Tailwind, PostCSS, MongoDB Atlas, Prisma, testing, linting, formatting, and more",
    },
    {
        property: "og:image",
        content:
            "https://user-images.githubusercontent.com/39869007/204083687-88e86af6-c69b-4465-9212-4b6d8b634872.png",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://markmals.github.io/lo-fi-stack" },
]

export default function App() {
    return (
        <html lang="en" className="bg-white dark:bg-zinc-900">
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
