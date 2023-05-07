import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { ContactList } from "./ContactList"

describe("contact list", () => {
    test("should render successfully", () => {
        let { baseElement } = render(<ContactList />)
        expect(baseElement).toBeTruthy()
    })
})
