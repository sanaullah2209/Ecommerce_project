import { createInsertSchema } from "drizzle-zod";
import { pgTable, integer, varchar, text } from "drizzle-orm/pg-core";

export const userTable = pgTable("users",{
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    email:varchar({length:255}).notNull().unique(),
    password:varchar({length:255}).notNull(),
    role:varchar({length:255}).notNull().default("user"),
    name:varchar({length:255}).notNull(),
    address:text(),
})

 export const createUserSchema = createInsertSchema(userTable).omit({id:true,role:true});
 export const loginSchema = createInsertSchema(userTable).pick({email:true,password:true});
