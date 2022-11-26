import { Meta, Story } from "@storybook/preact"
import { Button } from "./Button"

export default { component: Button, title: "Button" } as Meta<typeof Button>

const Template: Story<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: "Primary Button",
    type: "primary",
    size: "md",
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: "Secondary Button",
    type: "secondary",
    size: "md",
}
