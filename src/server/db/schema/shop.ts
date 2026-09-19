import { relations } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { category } from "./categories";

export const shop = pgTable("shop", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    avatar: varchar("avatar", { length: 500 }),
    address: varchar("address", { length: 500 }),
    phone: varchar("phone", { length: 25 }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
    deletedAt: timestamp("deleted_at"),
})

export const shopRelation = relations(shop, ({ many }) => ({
    categories: many(category)
}))