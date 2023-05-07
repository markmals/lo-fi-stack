import type { Meta, StoryObj } from "@storybook/react"
import { ImageGrid as ImageGridComponent } from "./ImageGrid"

export default {
    component: ImageGridComponent,
    title: "ImageGrid",
    parameters: {
        backgrounds: {
            default: "teal",
            values: [
                { name: "teal", value: "#14b8a6" },
                { name: "sky", value: "#0ea5e9" },
            ],
        },
    },
} satisfies Meta<typeof ImageGridComponent>

export const ImageGrid: StoryObj<typeof ImageGridComponent> = {
    render() {
        return (
            <div className="flex justify-center p-8">
                <ImageGridComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
