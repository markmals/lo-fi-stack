import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { DatePicker } from "./DatePicker"

describe("date picker", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<DatePicker />)
        expect(baseElement).toBeTruthy()
    })
})
