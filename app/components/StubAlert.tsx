import { Alert } from "./Alert"

export function StubAlert() {
    return (
        <Alert>
            This page is a{" "}
            <a
                className="font-medium underline hover:text-yellow-600"
                href="https://en.wikipedia.org/wiki/Wikipedia:Stub"
            >
                stub
            </a>
            . You can help{" "}
            <a
                className="font-medium underline hover:text-yellow-600"
                href="https://github.com/markmals/lo-fi-stack/pulls"
            >
                by expanding it.
            </a>
        </Alert>
    )
}
