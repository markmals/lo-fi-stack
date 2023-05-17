import type { Meta, StoryObj } from "@storybook/react"
import { Table as TableComponent } from "./Table"

export default {
    component: TableComponent,
    title: "Table",
    parameters: {
        backgrounds: {
            default: "violet",
            values: [
                { name: "violet", value: "#8b5cf6" },
                { name: "indigo", value: "#6366f1" },
            ],
        },
    },
} satisfies Meta<typeof TableComponent>

export const Table: StoryObj<typeof TableComponent> = {
    render() {
        return (
            <div className="flex items-center justify-center p-8 md:col-span-2">
                <TableComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
