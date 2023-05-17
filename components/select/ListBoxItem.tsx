import { CheckIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import type { ItemProps } from "react-aria-components"
import { Item } from "react-aria-components"

export function ListBoxItem<T extends object>(props: ItemProps<T> & { children?: string }) {
    return (
        <Item
            {...props}
            textValue={props.children}
            className={({ isFocused }) =>
                clsx(
                    "group",
                    "relative",
                    "cursor-pointer",
                    "select-none",
                    "rounded",
                    "py-2 pl-10 pr-4",
                    "outline-none",
                    isFocused ? "bg-[--focus-bg] text-white" : "text-gray-900"
                )
            }
        >
            {({ isSelected }) => (
                <>
                    <span
                        className={clsx(
                            "block truncate",
                            isSelected ? "font-medium" : "font-normal"
                        )}
                    >
                        {props.children}
                    </span>
                    {isSelected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[--focus-bg] group-data-[focused]:text-white">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                    )}
                </>
            )}
        </Item>
    )
}
