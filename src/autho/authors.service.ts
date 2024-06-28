import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import {tableauthors} from "../drizzle/schema"


export const authorsService = async (limit?: number) => {
    if (limit) {
        return await db.query.tableauthors.findMany({
            limit: limit
        });
    }
    return await db.query.tableBooks.findMany();
}

export const getauthorsService = async (id: number) => {
    return await db.query.tableauthors.findFirst({
        where: eq(tableauthors.id, id)
    })
}

export const createauthorsService = async (user:any) => {
    await db.insert(tableauthors).values(user)
    return "author created successfully";
}

export const updateauthorsService = async (id: number, user: any) => {
    await db.update(tableauthors).set(user).where(eq(tableauthors.id, id))
    return "author updated successfully";
}

export const deleteauthorsService = async (id: number) => {
    await db.delete(tableauthors).where(eq(tableauthors.id, id))
    return "author deleted successfully";
}
