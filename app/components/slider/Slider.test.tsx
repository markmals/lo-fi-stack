import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Slider } from "./Slider"

describe("slider", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<Slider />)
        expect(baseElement).toBeTruthy()
    })
})
