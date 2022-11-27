import type { Meta, Story } from "@storybook/preact"
import { Button } from "./Button"
import "./button.css"

export default {
    component: Button,
    title: "Button",
    // parameters: {
    //     design: {
    //         type: "figspec",
    //         url: "",
    //     },
    // },
} as Meta<typeof Button>

const Template: Story<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: "Primary Button",
    buttonStyle: "primary",
    buttonSize: "md",
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: "Secondary Button",
    buttonStyle: "secondary",
    buttonSize: "md",
}
