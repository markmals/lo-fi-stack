import { Outlet } from "@remix-run/react"
import { Header } from "~/components/Header"
import { Sidebar } from "~/components/Sidebar"
import { TableOfContents } from "~/components/TableOfContents"
import { mergeMeta } from "~/lib/merge-meta"

// export const links: LinksFunction = () => [...headerLinks()]

export const meta = mergeMeta(() => [{ title: "Lo-Fi Stack | Docs" }])

export default function Docs() {
    return (
        <>
            <Header />
            <main
                className="gap-x4 grid-cols-[minmax(0.5rem, 1fr)_minmax(0,var(--max-width))_minmax(0.5rem,1fr)] grid grid-flow-row overflow-y-hidden one-col:grid-cols-[20rem_minmax(0,46em)] two-col:grid-cols-[20rem_minmax(0,46em)_18rem]"
                style={{ overflow: "initial" }}
            >
                <aside className="top-[96px] hidden h-[calc(100vh-96px)] one-col:sticky one-col:flex one-col:pl-8">
                    <Sidebar />
                </aside>
                <div className="flex h-full overflow-y-scroll px-4 pt-8 two-col:p-0">
                    <article className="flex h-full w-full max-w-[75ch] flex-col p-0" id="article">
                        <section className="markdown mb-12">
                            {/* <h1 id="overview">{title}</h1> */}
                            {/* <nav className="block sm:hidden">
                                <TableOfContents
                                    headings={headings}
                                    title={title}
                                />
                            </nav> */}
                            <Outlet />
                        </section>
                    </article>
                </div>
                <aside className="hidden two-col:flex">
                    <TableOfContents />
                </aside>
            </main>
        </>
    )
}
