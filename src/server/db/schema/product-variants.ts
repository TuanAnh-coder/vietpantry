import {
    bigint,
    integer,
    pgTable,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { product } from "./product";

export const productVariant = pgTable("product_variants", {
    id: bigint("id", {
        mode: "number",
    })
        .generatedAlwaysAsIdentity()
        .primaryKey(),

    productId: bigint("product_id", {
        mode: "number",
    })
        .notNull()
        .references(() => product.id, {
            onDelete: "cascade",
        }),

    title: varchar("title", {
        length: 255,
    }).notNull(),

    price: integer("price").notNull().default(0),

    stock: integer("stock").notNull().default(0),

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

export const productVariantRelations = relations(
    productVariant,
    ({ one }) => ({
        product: one(product, {
            fields: [productVariant.productId],
            references: [product.id],
        }),
    }),
);