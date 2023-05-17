import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Popover } from "./Popover"

describe("popover", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<Popover />)
        expect(baseElement).toBeTruthy()
    })
})
