import type { Meta, StoryObj } from "@storybook/react"
import { ContactList as ContactListComponent } from "./ContactList"

export default {
    component: ContactListComponent,
    title: "ContactList",
    parameters: {
        backgrounds: {
            default: "blue",
            values: [
                { name: "blue", value: "#3b82f6" },
                { name: "sky", value: "#0ea5e9" },
            ],
        },
    },
} satisfies Meta<typeof ContactListComponent>

export const ContactList: StoryObj<typeof ContactListComponent> = {
    render() {
        return (
            <div className="flex justify-center p-8">
                <ContactListComponent />
            </div>
        )
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}
