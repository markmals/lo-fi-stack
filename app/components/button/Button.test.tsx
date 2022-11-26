import { render } from "@testing-library/preact"
import { describe, expect, test } from "vitest"

import { Button } from "./Button"

describe("button", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<Button type="secondary" />)
        expect(baseElement).toBeTruthy()
    })
})
