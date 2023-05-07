import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { RadioGroup } from "./RadioGroup"

describe("radio group", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<RadioGroup />)
        expect(baseElement).toBeTruthy()
    })
})
