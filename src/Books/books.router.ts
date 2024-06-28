import { Hono } from "hono";
import { listBooks, getBooks, createBooks, updateBooks, deleteBooks } from "./books.controller"
//import { adminRoleAuth,userRoleAuth,userAdminRoleAuth} from "../middleware/bearAuth";
import { zValidator } from "@hono/zod-validator";
import { userSchema } from "../validators";
export const booksRouter = new Hono();



//get all users      api/users
booksRouter.get("/books", listBooks);
//get a single user    api/users/1
booksRouter.get("/books/:id", getBooks);
// create a user 
booksRouter.post("/books", createBooks);
//update a user
booksRouter.put("/books/:id", updateBooks);

booksRouter.delete("/books/:id", deleteBooks);

//https:domai.com/api/users?limit=10

// //get all users      api/users
// userRouter.get("/users",adminRoleAuth, listUsers);
// //get a single user    api/users/1
// userRouter.get("/users/:id",userRoleAuth,userAdminRoleAuth, getUser);
// // create a user 
// userRouter.post("/users",userRoleAuth,userAdminRoleAuth, createUser);
// //update a user
// userRouter.put("/users/:id",adminRoleAuth, updateUser);

// userRouter.delete("/users/:id",adminRoleAuth, deleteUser);

// //https:domai.com/api/users?limit=10