import { StorybookConfig } from "@storybook/core-common"
import { Meta, Story } from "@storybook/preact"
import { ComponentProps, ComponentType } from "preact"
import { mergeConfig, UserConfigExport } from "vite"
type PreactComponent = ComponentType<any>

export type ViteStorybookConfig = StorybookConfig & {
    viteFinal?(config: UserConfigExport, options: any): UserConfigExport
}

export function defineConfig<Config extends ViteStorybookConfig>(config: Config): Config {
    return config
}

export function mergeViteConfig(initial: UserConfigExport, config: Partial<UserConfigExport>) {
    return mergeConfig(initial, config)
}

export function defineMeta<Component extends PreactComponent>(
    meta: Meta<Component>
): Meta<Component> {
    return meta
}

export function createStory<Component extends PreactComponent>(
    builder: Story<Component>
): Story<Component>
export function createStory<Component extends PreactComponent>(
    template: Story<Component>,
    args: Partial<ComponentProps<Component>>
): Story<Component>
export function createStory<Component extends PreactComponent>(
    template?: Story<Component>,
    args: Partial<ComponentProps<Component>> = {},
    builder?: Story<Component>
): Story<Component> {
    if (builder) {
        return builder
    } else {
        let clone = template!.bind({})
        clone.args = args
        return clone
    }
}
