import type { Meta, StoryObj } from "@storybook/react"
import { ProgressBar as ProgressBarComponent } from "./ProgressBar"

export default {
    component: ProgressBarComponent,
    title: "ProgressBar",
    parameters: {
        backgrounds: {
            default: "blue",
            values: [
                { name: "blue", value: "#3b82f6" },
                { name: "purple", value: "#a855f7" },
            ],
        },
    },
} satisfies Meta<typeof ProgressBarComponent>

export const ProgressBar: StoryObj<typeof ProgressBarComponent> = {
    render() {
        return (
            <div className="flex items-center justify-center p-8">
                <ProgressBarComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
