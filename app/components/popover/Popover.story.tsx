import type { Meta, StoryObj } from "@storybook/react"
import { Popover as PopoverComponent } from "./Popover"

export default {
    component: PopoverComponent,
    title: "Popover",
    parameters: {
        backgrounds: {
            default: "orange",
            values: [
                { name: "orange", value: "#fb923c" },
                { name: "pink", value: "#db2777" },
            ],
        },
    },
} satisfies Meta<typeof PopoverComponent>

export const Popover: StoryObj<typeof PopoverComponent> = {
    render() {
        return (
            <div className="flex items-start justify-center p-8">
                <PopoverComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
