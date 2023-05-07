import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { ImageGrid } from "./ImageGrid"

describe("image grid", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<ImageGrid />)
        expect(baseElement).toBeTruthy()
    })
})
