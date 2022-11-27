import type { Session } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import type { UserRecord } from "firebase-admin/auth"
import { signInWithEmailAndPassword } from "firebase/auth"

import { destroySession, getSession } from "./firebase-session"
import { auth } from "./firebase.server"

async function checkSessionCookie(session: Session) {
    try {
        let cookie = session.get("session") || ""
        return await auth.server.verifySessionCookie(cookie)
    } catch {
        return { uid: undefined }
    }
}

/**
 * Uses `firebase-admin` to verify the session cookie from a request.
 *
 * @remarks
 * Use this method to protect loaders and actions.
 *
 * @throws {@link Response}
 * When this check fails, it throws a redirect to the login page (/login)
 *
 * @returns
 * A user record that can be handy to request or manipulate data from the Firestore for this user.
 */
export async function requireAuth(request: Request): Promise<UserRecord> {
    let session = await getSession(request.headers.get("cookie"))
    let { uid } = await checkSessionCookie(session)
    if (!uid) {
        throw redirect("/login", {
            headers: { "Set-Cookie": await destroySession(session) },
        })
    }
    return auth.server.getUser(uid)
}

/**
 * Authenticates a user with their email and password.
 *
 * @remarks
 * Use Remix's `cookieSessionStorage` to set, read, and destroy the returned cookie string.
 *
 * @returns
 * A Firebase session-cookie-string, when sign-in is successful.
 */
export async function signIn(email: string, password: string): Promise<string> {
    let { user } = await signInWithEmailAndPassword(auth.client, email, password)
    let idToken = await user.getIdToken()
    let expiresIn = 1000 * 60 * 60 * 24 * 7 // 1 week
    let sessionCookie = await auth.server.createSessionCookie(idToken, {
        expiresIn,
    })
    return sessionCookie
}

/**
 * Creates a user and calls `signIn` to authenticate the user.
 *
 * @remarks
 * Use Remix's `cookieSessionStorage` to set, read, and destroy the returned cookie string.
 *
 * @returns
 * A Firebase session-cookie-string, when sign-up and sign-in are both successful.
 */
export async function signUp(name: string, email: string, password: string): Promise<string> {
    await auth.server.createUser({
        email,
        password,
        displayName: name,
    })
    return await signIn(email, password)
}
