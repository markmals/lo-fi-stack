import type { LinksFunction } from "@remix-run/node"
import clsx from "clsx"
import { SITE } from "~/lib/metadata"
import styles from "./Header.css"

export const headerLinks: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export function Header() {
    return (
        <header className="header sticky top-0 z-10 flex w-full items-center justify-center overflow-hidden bg-white/80 backdrop-blur-lg dark:bg-zinc-900/80">
            <nav className="flex w-full max-w-[82em] items-center justify-end gap-4 p-4">
                {/* TODO: Mobile sidebar toggle */}
                {/* <div className="one-col:hidden"><SidebarToggle /></div> */}
                <div
                    className={clsx(
                        "one-col:w-auto",
                        "one-col:m-0",
                        "one-col:z-0",
                        "-z-10",
                        "w-8",
                        "flex-1",
                        "shrink-0",
                        "gap-1",
                        "overflow-hidden",
                        "text-3xl",
                        "font-semibold",
                        "leading-7",
                        "text-white"
                    )}
                >
                    <a
                        href="/"
                        className={clsx(
                            "flex",
                            "flex-row",
                            "items-center",
                            "gap-4",
                            "px-2",
                            "py-1",
                            "-mx-2",
                            "no-underline",
                            "font-bold",
                            "text-teal-900",
                            "dark:text-teal-700",
                            "cursor-pointer"
                        )}
                    >
                        <img alt="Lo-Fi Stack Logo" src="/lofi-logo@2x.png" className="h-12" />
                        <h1 className="font-montserrat">{SITE.title}</h1>
                    </a>
                </div>
                {/* TODO: Search */}
                <div className="hidden flex-grow one-col:flex"></div>
                {/* <div className="search-item">
                    <Search />
                </div> */}
            </nav>
        </header>
    )
}
