import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup as RadioGroupComponent } from "./RadioGroup"

export default {
    component: RadioGroupComponent,
    title: "RadioGroup",
    parameters: {
        backgrounds: {
            default: "blue",
            values: [
                { name: "blue", value: "#93c5fd" },
                { name: "indigo", value: "#a5b4fc" },
            ],
        },
    },
} satisfies Meta<typeof RadioGroupComponent>

export const RadioGroup: StoryObj<typeof RadioGroupComponent> = {
    render() {
        return (
            <div className="p-8">
                <RadioGroupComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
