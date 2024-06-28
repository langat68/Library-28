import { Hono } from "hono";
import { listauthors, getauthors, createauthors, updateauthors, deleteauthors } from "./authors.controller"
//import { adminRoleAuth,userRoleAuth,userAdminRoleAuth} from "../middleware/bearAuth";
import { zValidator } from "@hono/zod-validator";
import { userSchema } from "../validators";
export const authorsRouter = new Hono();



//get all users      api/users
authorsRouter.get("/author", listauthors);
//get a single user    api/users/1
authorsRouter.get("/author/:id", getauthors);
// create a user 
authorsRouter.post("/author", createauthors);
//update a user
authorsRouter.put("/author/:id", updateauthors);

authorsRouter.delete("/author/:id",  deleteauthors);

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