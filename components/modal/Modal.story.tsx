import type { Meta, StoryObj } from "@storybook/react"
import { Modal as ModalComponent } from "./Modal"

export default {
    component: ModalComponent,
    title: "Modal",
    parameters: {
        backgrounds: {
            default: "indigo",
            values: [
                { name: "indigo", value: "#6366f1" },
                { name: "sky", value: "#38bdf8" },
            ],
        },
    },
} satisfies Meta<typeof ModalComponent>

export const Modal: StoryObj<typeof ModalComponent> = {
    render() {
        return (
            <div className="flex items-center justify-center p-8">
                <ModalComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
