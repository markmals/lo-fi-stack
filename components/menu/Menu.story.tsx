import type { Meta, StoryObj } from "@storybook/react"
import { Menu as MenuComponent } from "./Menu"

export default {
    component: MenuComponent,
    title: "Menu",
    parameters: {
        backgrounds: {
            default: "violet",
            values: [
                { name: "violet", value: "#8b5cf6" },
                { name: "blue", value: "#3b82f6" },
            ],
        },
    },
} satisfies Meta<typeof MenuComponent>

export const Menu: StoryObj<typeof MenuComponent> = {
    render() {
        return (
            <div className="p-8">
                <MenuComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
