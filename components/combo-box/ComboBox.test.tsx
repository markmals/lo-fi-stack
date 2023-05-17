import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { ComboBox } from "./ComboBox"

describe("combo box", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<ComboBox />)
        expect(baseElement).toBeTruthy()
    })
})
