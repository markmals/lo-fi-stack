import type { Meta, StoryObj } from "@storybook/react"
import { DatePicker as DatePickerComponent } from "./DatePicker"

export default {
    component: DatePickerComponent,
    title: "DatePicker",
    parameters: {
        backgrounds: {
            default: "fuchsia",
            values: [
                { name: "fuchsia", value: "#c026d3" },
                { name: "violet", value: "#8b5cf6" },
            ],
        },
    },
} satisfies Meta<typeof DatePickerComponent>

export const DatePicker: StoryObj<typeof DatePickerComponent> = {
    render() {
        return (
            <div className="flex items-start justify-center p-8">
                <DatePickerComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
