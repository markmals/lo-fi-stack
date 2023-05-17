import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Select } from "./Select"

describe("select", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<Select />)
        expect(baseElement).toBeTruthy()
    })
})
