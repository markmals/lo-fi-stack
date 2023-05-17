import { NavLink } from "@remix-run/react"
import clsx from "clsx"
import { SIDEBAR } from "~/lib/metadata"

const links = Object.entries(SIDEBAR)

export function Sidebar() {
    return (
        <nav className="mr-4 w-full">
            <ul id="nav-groups" className="h-full overflow-y-auto overflow-x-visible p-0 last:mb-8">
                {links.map(([header, children], idx) => (
                    <li
                        key={idx}
                        className={clsx({ "mb-12": idx === links.length - 1, "mt-8": idx !== 0 })}
                    >
                        <div>
                            <h2 className="mb-2 px-4 py-[0.1rem] font-montserrat font-extrabold uppercase text-[#322e38] dark:text-gray-300/80">
                                {header}
                            </h2>
                            <ul>
                                {children.map(child => {
                                    const url = "/docs/" + child.link
                                    return (
                                        <li key={child.link}>
                                            {/* TODO: aria-current={isCurrent ? "page" : false} */}
                                            <NavLink
                                                to={url}
                                                className={({ isActive }) =>
                                                    clsx(
                                                        "m-px",
                                                        "px-4",
                                                        "py-[0.3rem]",
                                                        "no-underline",
                                                        "block",
                                                        "rounded-lg",
                                                        {
                                                            "text-gray-900": !isActive,
                                                            "hover:bg-gray-100": !isActive,
                                                            "focus:bg-gray-100": !isActive,
                                                            "text-teal-600": isActive,
                                                            "bg-teal-100": isActive,
                                                            "dark:text-gray-300/80": !isActive,
                                                            "dark:hover:bg-zinc-800": !isActive,
                                                            "dark:focus:bg-zinc-800": !isActive,
                                                            "dark:text-teal-500": isActive,
                                                            "dark:bg-teal-800/50": isActive,
                                                            "font-semibold": isActive,
                                                        }
                                                    )
                                                }
                                            >
                                                {child.text.includes("`") ? (
                                                    <code className="text-[0.96rem]">
                                                        {child.text.replaceAll("`", "")}
                                                    </code>
                                                ) : (
                                                    child.text
                                                )}
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
