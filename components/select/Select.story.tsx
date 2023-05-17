import type { Meta, StoryObj } from "@storybook/react"
import { Select as SelectComponent } from "./Select"

export default {
    component: SelectComponent,
    title: "Select",
    parameters: {
        backgrounds: {
            default: "rose",
            values: [
                { name: "rose", value: "#f43f5e" },
                { name: "amber", value: "#f59e0b" },
            ],
        },
    },
} satisfies Meta<typeof SelectComponent>

export const Select: StoryObj<typeof SelectComponent> = {
    render() {
        return (
            <div className="flex justify-center p-8">
                <SelectComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
