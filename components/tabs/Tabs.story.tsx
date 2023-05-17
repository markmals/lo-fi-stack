import type { Meta, StoryObj } from "@storybook/react"
import { Tabs as TabsComponent } from "./Tabs"

export default {
    component: TabsComponent,
    title: "Tabs",
    parameters: {
        backgrounds: {
            default: "emerald",
            values: [
                { name: "emerald", value: "#10b981" },
                { name: "lime", value: "#84cc16" },
            ],
        },
    },
} satisfies Meta<typeof TabsComponent>

export const Tabs: StoryObj<typeof TabsComponent> = {
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
