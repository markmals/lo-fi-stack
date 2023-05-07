import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Tabs } from "./Tabs"

describe("tabs", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<Tabs />)
        expect(baseElement).toBeTruthy()
    })
})
