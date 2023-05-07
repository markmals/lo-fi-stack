import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Table } from "./Table"

describe("table", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<Table />)
        expect(baseElement).toBeTruthy()
    })
})
