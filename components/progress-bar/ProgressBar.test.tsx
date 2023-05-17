import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { ProgressBar } from "./ProgressBar"

describe("progress bar", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<ProgressBar />)
        expect(baseElement).toBeTruthy()
    })
})
