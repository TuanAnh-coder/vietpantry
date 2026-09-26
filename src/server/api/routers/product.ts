import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { product } from "~/server/db/schema/product";

const productRoute = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => {
        return await ctx.db.select().from(product);
    }),
});
export { productRoute }