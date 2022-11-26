import transformerDirectives from "@unocss/transformer-directives"
import transformerVariantGroup from "@unocss/transformer-variant-group"
import { defineConfig, presetIcons, presetUno } from "unocss"

export default defineConfig({
    theme: {},
    presets: [presetUno(), presetIcons()],
    transformers: [
        transformerVariantGroup(),
        // FIXME: This causes the source file to be replaced with the built file
        transformerDirectives(),
    ],
})
