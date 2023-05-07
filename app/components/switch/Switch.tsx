import clsx from "clsx"
import { Switch as AriaSwitch } from "react-aria-components"

export function Switch() {
    return (
        <AriaSwitch className="group flex items-center gap-2 text-sm font-semibold text-black">
            <div
                className={clsx(
                    "inline-flex",
                    "h-[26px] w-[44px]",
                    "shrink-0",
                    "cursor-pointer",
                    "rounded-full",
                    "border border-white/30",
                    "bg-yellow-600 bg-clip-padding",
                    "p-[3px]",
                    "shadow-inner",
                    "transition-colors",
                    "duration-200",
                    "ease-in-out",
                    "focus:outline-none",
                    "group-data-[pressed]:bg-yellow-700",
                    "group-data-[selected]:bg-amber-800",
                    "group-data-[selected]:group-data-[pressed]:bg-amber-900",
                    "group-data-[focus-visible]:ring-2",
                    "group-data-[focus-visible]:ring-black"
                )}
            >
                <span className="h-[18px] w-[18px] translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[selected]:translate-x-[100%]" />
            </div>
            Wi-Fi
        </AriaSwitch>
    )
}
