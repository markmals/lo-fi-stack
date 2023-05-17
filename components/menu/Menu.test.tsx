import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Menu } from "./Menu"

describe("menu", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<Menu />)
        expect(baseElement).toBeTruthy()
    })
})
