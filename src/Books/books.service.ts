import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import {tableBooks} from "../drizzle/schema"


export const BooksService = async (limit?: number) => {
    if (limit) {
        return await db.query.tableBooks.findMany({
            limit: limit
        });
    }
    return await db.query.tableBooks.findMany();
}

export const getBooksService = async (id: number) => {
    return await db.query.tableBooks.findFirst({
        where: eq(tableBooks.id, id)
    })
}

export const createBooksService = async (user:any) => {
    await db.insert(tableBooks).values(user)
    return "book created successfully";
}

export const updateBooksService = async (id: number, user: any) => {
    await db.update(tableBooks).set(user).where(eq(tableBooks.id, id))
    return "book updated successfully";
}

export const deleteBooksService = async (id: number) => {
    await db.delete(tableBooks).where(eq(tableBooks.id, id))
    return "book deleted successfully";
}
