import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Switch } from "./Switch"

describe("switch", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<Switch />)
        expect(baseElement).toBeTruthy()
    })
})
