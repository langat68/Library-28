 import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema"

export const client = neon(process.env.Database_URL!)   //get the database url from the environment




const db = drizzle(client, { schema, logger: true })  //create a drizzle instance

export default db; 