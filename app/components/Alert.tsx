import clsx from "clsx"
import type { HTMLProps, PropsWithChildren } from "react"

export function Alert({
    children,
    className,
    ...props
}: PropsWithChildren & HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={clsx(
                "alert",
                "rounded border-l-4 border-yellow-400 bg-yellow-50 px-4 py-2.5 dark:border-yellow-500 dark:bg-yellow-900",
                className
            )}
        >
            <div className="flex flex-row items-center">
                <div className="flex-shrink-0">
                    <svg
                        className="h-5 w-5 text-yellow-400 dark:text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
                <div className="ml-3">
                    <p className="text-sm text-yellow-700">{children}</p>
                </div>
            </div>
        </div>
    )
}
