import type { JSXInternal } from "preact/src/jsx"

export namespace Button {
    export interface Props extends JSXInternal.HTMLAttributes<HTMLButtonElement> {
        buttonStyle?: "primary" | "secondary"
        buttonSize?: "sm" | "md" | "lg"
    }
}

export function Button({
    buttonStyle = "primary",
    buttonSize = "md",
    children,
    ...props
}: Button.Props) {
    return (
        <button
            type="button"
            data-btn
            data-btn-style={buttonStyle}
            data-btn-tint={buttonStyle === "secondary" ? "teal" : undefined}
            data-btn-size={buttonSize}
            {...props}
        >
            {children}
        </button>
    )
}
