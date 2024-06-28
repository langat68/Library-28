import { Context } from "hono";
import { authorsService, getauthorsService, createauthorsService, updateauthorsService, deleteauthorsService } from "./authors.service";

export const listauthors = async (c: Context) => {
    try {
        //limit the number of books to be returned

        const limit = Number(c.req.query('limit'))

        const data = await authorsService(limit);
        if (data == null || data.length == 0) {
            return c.text("Book not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const getauthors = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const user = await  getauthorsService(id);
    if (user == undefined) {
        return c.text("User not found", 404);
    }
    return c.json(user, 200);
}
export const createauthors = async (c: Context) => {
    try {
        const user = await c.req.json();
        const createdUser = await createauthorsService(user);


        if (!createdUser) return c.text("User not created", 404);
        return c.json({ msg: createdUser }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updateauthors = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const user = await c.req.json();
    try {
        // search for the user
        const searchedBooks = await getauthorsService(id);
        if (searchedBooks == undefined) return c.text("User not found", 404);
        // get the data and update it
        const res = await updateauthorsService(id, user);
        // return a success message
        if (!res) return c.text("User not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deleteauthors = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the user
        const user = await getauthorsService(id);
        if (user == undefined) return c.text("User not found", 404);
        //deleting the user
        const res = await deleteauthorsService(id);
        if (!res) return c.text("User not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}