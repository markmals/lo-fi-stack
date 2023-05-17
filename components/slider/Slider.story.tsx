import type { Meta, StoryObj } from "@storybook/react"
import { Slider as SliderComponent } from "./Slider"

export default {
    component: SliderComponent,
    title: "Slider",
    parameters: {
        backgrounds: {
            default: "purple",
            values: [
                { name: "purple", value: "#a855f7" },
                { name: "pink", value: "#ec4899" },
            ],
        },
    },
} satisfies Meta<typeof SliderComponent>

export const Slider: StoryObj<typeof SliderComponent> = {
    render() {
        return (
            <div className="flex items-center justify-center p-8">
                <SliderComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
