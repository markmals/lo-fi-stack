import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Modal } from "./Modal"

describe("modal", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<Modal />)
        expect(baseElement).toBeTruthy()
    })
})
