import { RenderableProps } from "preact"

export namespace Button {
    export interface Props extends RenderableProps<any> {
        type?: "primary" | "secondary"
        size?: "sm" | "md" | "lg"
    }
}

export function Button({ type = "primary", size = "md", children, ...props }: Button.Props) {
    return (
        <button
            type="button"
            data-btn
            data-btn-type={type}
            data-btn-tint={type === "secondary" ? "teal" : undefined}
            data-btn-size={size}
            {...props}
        >
            {children}
        </button>
    )
}
