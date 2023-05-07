import clsx from "clsx"
import type { ItemProps } from "react-aria-components"
import { Item, Menu as AriaMenu, MenuTrigger, Popover, Separator } from "react-aria-components"
import { OverlayButton } from "./OverlayButton"

export function Menu() {
    return (
        <MenuTrigger>
            <OverlayButton aria-label="Menu">☰</OverlayButton>
            <Popover
                className={clsx(
                    "data-[entering]:animate-in",
                    "data-[entering]:fade-in",
                    "data-[entering]:zoom-in-95",
                    "data-[exiting]:animate-out",
                    "data-[exiting]:fade-out",
                    "data-[exiting]:zoom-out-95",
                    "fill-mode-forwards",
                    "w-56",
                    "origin-top-left",
                    "overflow-auto",
                    "rounded-md",
                    "bg-white",
                    "p-1",
                    "shadow-lg",
                    "ring-1",
                    "ring-black",
                    "ring-opacity-5"
                )}
            >
                <AriaMenu className="outline-none">
                    <MenuItem id="new">New…</MenuItem>
                    <MenuItem id="open">Open…</MenuItem>
                    <Separator className="mx-3 my-1 border-b border-b-gray-300" />
                    <MenuItem id="save">Save</MenuItem>
                    <MenuItem id="save-as">Save as…</MenuItem>
                    <Separator className="mx-3 my-1 border-b border-b-gray-300" />
                    <MenuItem id="print">Print…</MenuItem>
                </AriaMenu>
            </Popover>
        </MenuTrigger>
    )
}

function MenuItem<T extends object>(props: ItemProps<T>) {
    return (
        <Item
            {...props}
            className={({ isFocused }) =>
                clsx(
                    "group",
                    "flex",
                    "w-full",
                    "items-center",
                    "cursor-pointer",
                    "rounded-md",
                    "px-3 py-2",
                    "outline-none",
                    "sm:text-sm",
                    isFocused ? "bg-violet-500 text-white" : "text-gray-900"
                )
            }
        />
    )
}
