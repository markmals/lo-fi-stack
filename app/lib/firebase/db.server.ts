import { createCollection } from "holocron-db/firestore"
import { getFirestore } from "./firebase.server"
const firestore = getFirestore()

interface User {
    id: string
    name: string
    email: string
}

interface Post {
    id: string
    title: string
    contents: string
}

const db = {
    users: createCollection<User>("users", firestore),
    posts: createCollection<Post>("posts", firestore),
}

export default db
