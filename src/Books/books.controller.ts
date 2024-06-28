import { Context } from "hono";
import { BooksService, getBooksService, createBooksService, updateBooksService, deleteBooksService } from "./books.service";

export const listBooks = async (c: Context) => {
    try {
        //limit the number of books to be returned

        const limit = Number(c.req.query('limit'))

        const data = await BooksService(limit);
        if (data == null || data.length == 0) {
            return c.text("Book not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const getBooks = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const user = await  getBooksService(id);
    if (user == undefined) {
        return c.text("User not found", 404);
    }
    return c.json(user, 200);
}
export const createBooks = async (c: Context) => {
    try {
        const user = await c.req.json();
        const createdUser = await createBooksService(user);


        if (!createdUser) return c.text("User not created", 404);
        return c.json({ msg: createdUser }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updateBooks = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const user = await c.req.json();
    try {
        // search for the user
        const searchedBooks = await getBooksService(id);
        if (searchedBooks == undefined) return c.text("User not found", 404);
        // get the data and update it
        const res = await updateBooksService(id, user);
        // return a success message
        if (!res) return c.text("User not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deleteBooks = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the user
        const user = await getBooksService(id);
        if (user == undefined) return c.text("User not found", 404);
        //deleting the user
        const res = await deleteBooksService(id);
        if (!res) return c.text("User not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}