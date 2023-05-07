import type { Meta, StoryObj } from "@storybook/react"
import { ComboBox as ComboBoxComponent } from "./ComboBox"

export default {
    component: ComboBoxComponent,
    title: "ComboBox",
    parameters: {
        backgrounds: {
            default: "cyan",
            values: [
                { name: "cyan", value: "#22d3ee" },
                { name: "sky", value: "#38bdf8" },
            ],
        },
    },
} satisfies Meta<typeof ComboBoxComponent>

export const ComboBox: StoryObj<typeof ComboBoxComponent> = {
    render() {
        return (
            <div className="flex justify-center p-8">
                <ComboBoxComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
