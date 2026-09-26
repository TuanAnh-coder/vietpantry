import { pgTable, unique, uuid } from "drizzle-orm/pg-core";
import { user } from "./users";
import { relations } from "drizzle-orm";
import { cartItem } from "./cart_item";

export const cart = pgTable("cart", {
    id: uuid().primaryKey().defaultRandom(),
    userId: uuid("user_id")
        .notNull()
        .references(() => user.id, {
            onDelete: "cascade",
        }),
},
    (table) => [
        unique("cart_user_id_unique").on(table.userId),
    ],
)
export const cartRelations = relations(cart, ({ one, many }) => ({
    user: one(user, {
        fields: [cart.userId],
        references: [user.id],
    }),

    items: many(cartItem),
}));