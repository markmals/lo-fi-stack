import * as admin from "firebase-admin/app"
import { getAuth as getServerAuth } from "firebase-admin/auth"
import * as client from "firebase/app"
import { getAuth as getClientAuth } from "firebase/auth"
export { getFirestore } from "firebase-admin/firestore"

if (client.getApps().length === 0) {
    client.initializeApp(JSON.parse(process.env.CLIENT_CONFIG!))
}

if (admin.getApps().length === 0) {
    admin.initializeApp({
        credential: admin.cert(JSON.parse(process.env.SERVICE_ACCOUNT!)),
    })
}

export const auth = {
    server: getServerAuth(),
    client: getClientAuth(),
}
