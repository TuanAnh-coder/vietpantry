import { pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { user } from "./users";

export const Provider = pgEnum("Provider", ["None", "Google", "Facebook"])
export const account = pgTable('account', {
    id: uuid().defaultRandom().primaryKey(),
    email: varchar({ length: 255 }).notNull(),
    password: varchar({ length: 255 }).notNull(),
    userId: uuid("user_id")
        .notNull()
        .references(() => user.id, {
            onDelete: "cascade",
        }),
    provider: Provider().default("None").notNull(),
    createdAt: timestamp("created_at", {
        withTimezone: true,
    }).defaultNow().notNull(),

    updatedAt: timestamp("updated_at", {
        withTimezone: true,
    }).defaultNow().notNull(),
})