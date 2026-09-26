import {
    bigint,
    pgTable,
    real,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { productVariant } from "./product-variants";

export const product = pgTable("products", {
    id: bigint("id", {
        mode: "number",
    })
        .generatedAlwaysAsIdentity()
        .primaryKey(),

    title: varchar("title", {
        length: 255,
    }).notNull(),

    description: text(),

    thumbnail: text(),

    images: text().array(),

    rating: real("rating").default(5).notNull(),

    createdAt: timestamp("created_at", {
        withTimezone: true,
    })
        .defaultNow()
        .notNull(),

    updatedAt: timestamp("updated_at", {
        withTimezone: true,
    })
        .defaultNow()
        .notNull(),
});

export const productRelations = relations(product, ({ many }) => ({
    variants: many(productVariant),
}));