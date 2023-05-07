import clsx from "clsx"
import type { ButtonProps } from "react-aria-components"
import { Button } from "react-aria-components"

export function OverlayButton(props: ButtonProps & React.RefAttributes<HTMLButtonElement>) {
    return (
        <Button
            {...props}
            className={clsx(
                "inline-flex",
                "items-center",
                "justify-center",
                "rounded-md",
                "border",
                "border-white/20",
                "bg-black",
                "bg-opacity-20",
                "bg-clip-padding",
                "px-3.5 py-2",
                "font-medium",
                "text-white",
                "outline-none",
                "transition-colors",
                "data-[hovered]:bg-opacity-30",
                "data-[pressed]:bg-opacity-40",
                "data-[focus-visible]:ring-2",
                "data-[focus-visible]:ring-white/75",
                "sm:text-sm"
            )}
        />
    )
}
