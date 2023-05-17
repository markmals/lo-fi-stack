import { Link, useLocation } from "@remix-run/react"
import clsx from "clsx"
import { unescape } from "html-escaper"
import { useEffect, useState } from "react"

interface Heading {
    depth: ""
    slug: string
    text: string
}

export function TableOfContents() {
    const [title, setTitle] = useState<string>("")
    const [headings, setHeadings] = useState<Heading[]>([])
    const location = useLocation()

    useEffect(() => {
        const t = document.querySelectorAll("h1")
        setTitle(Array.from(t).find(t => t.textContent !== "Lo-Fi Stack")!.textContent!)

        const headings = document.querySelectorAll("article :is(h2, h3, h4)")
        setHeadings(
            Array.from(headings).map(node => ({
                depth: "",
                slug: node.id,
                text: node.textContent!,
            }))
        )
    }, [location.pathname])

    return (
        <nav aria-labelledby="grid-right" className="sticky top-[96px] h-[calc(100vh-96px)] w-full">
            <div className="h-full overflow-auto p-0">
                <h2 className="heading">{title}</h2>
                {headings.length ? (
                    <ul>
                        {headings.map(heading => (
                            <li
                                key={heading.slug}
                                className={clsx("header-link", `depth-${heading.depth}`)}
                            >
                                <Link to={`#${heading.slug}`}>{unescape(heading.text)}</Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <i
                        style={{
                            paddingInlineStart: "2rem",
                            borderLeft: "4px solid var(--theme-divider)",
                            userSelect: "none",
                        }}
                    >
                        No Content
                    </i>
                )}
            </div>
        </nav>
    )
}
