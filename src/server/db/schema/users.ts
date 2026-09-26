import { relations } from "drizzle-orm";
import { pgEnum, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { cart } from "./cart";

export const Role = pgEnum("Role", ["Admin", "Customer", "Seller"])
export const user = pgTable("user", {
    id: uuid().defaultRandom().primaryKey(),
    user_name: varchar({ length: 255 }).notNull(),
    phone_number: varchar({ length: 255 }),
    email: varchar({ length: 255 }).notNull(),
    avatar: text().array(),
    role: Role().default("Customer").notNull(),
    address: text().array()
})
export const userRelations = relations(user, ({ one }) => ({
    cart: one(cart),
}));