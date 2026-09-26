import { relations } from "drizzle-orm";
import {
    bigint,
    integer,
    pgTable,
    timestamp,
    unique,
    uuid,
} from "drizzle-orm/pg-core";

import { cart } from "./cart";
import { productVariant } from "./product-variants";

export const cartItem = pgTable(
    "cart_item",
    {
        id: uuid("id").defaultRandom().primaryKey(),

        cartId: uuid("cart_id")
            .notNull()
            .references(() => cart.id, {
                onDelete: "cascade",
            }),

        variantId: bigint("variant_id", {
            mode: "number",
        })
            .notNull()
            .references(() => productVariant.id, {
                onDelete: "restrict",
            }),

        quantity: integer("quantity")
            .notNull()
            .default(1),

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
    },
    (table) => [
        unique("cart_item_cart_variant_unique").on(
            table.cartId,
            table.variantId,
        ),
    ],
);

export const cartItemRelations = relations(
    cartItem,
    ({ one }) => ({
        cart: one(cart, {
            fields: [cartItem.cartId],
            references: [cart.id],
        }),

        variant: one(productVariant, {
            fields: [cartItem.variantId],
            references: [productVariant.id],
        }),
    }),
);