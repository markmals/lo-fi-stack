import type { Meta, StoryObj } from "@storybook/react"
import { Switch as SwitchComponent } from "./Switch"

export default {
    component: SwitchComponent,
    title: "Switch",
    parameters: {
        backgrounds: {
            default: "yellow",
            values: [
                { name: "yellow", value: "#fde047" },
                { name: "orange", value: "#fdba74" },
            ],
        },
    },
} satisfies Meta<typeof SwitchComponent>

export const Switch: StoryObj<typeof SwitchComponent> = {
    render() {
        return (
            <div className="flex items-center justify-center p-8">
                <SwitchComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
