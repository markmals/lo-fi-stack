import type { PrismaClient } from "@prisma/client"
import { PrismaClient as Client } from "@prisma/client"
import { PrismaClient as EdgeClient } from "@prisma/client/edge.js"

let db: PrismaClient

declare global {
    var __db: PrismaClient | undefined
}

if (process.env.NODE_ENV === "production") {
    db = new EdgeClient()
    db.$connect()
} else {
    if (!global.__db) {
        global.__db = new Client()
        global.__db.$connect()
    }
    db = global.__db
}

export { db }
