import type { LinksFunction } from "@remix-run/node"
import { createStyleLink } from "~/lib/helpers"
import styles from "~/styles/button.css"
export { Button } from "./Button"

export const links: LinksFunction = () => [createStyleLink(styles)]
