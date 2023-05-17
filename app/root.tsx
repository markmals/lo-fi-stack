import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import type { LinksFunction, V2_MetaFunction } from "@vercel/remix"
import tailwind from "./styles/styles.css"

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: tailwind },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700;1,800;1,900&display=swap",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
    },
]

export const meta: V2_MetaFunction = () => [
    { charSet: "utf-8" },
    { title: "Lo-Fi Stack" },
    { name: "viewport", content: "width=device-width; initial-scale=1; maximum-scale=1" },
    { property: "og:title", content: "Lo-Fi Stack" },
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
            <body className="grid min-h-screen w-full max-w-[100vw] grid-rows-[96px_1fr] leading-6 text-gray-950 dark:text-gray-300">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}
