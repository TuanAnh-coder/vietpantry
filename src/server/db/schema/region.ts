import { relations } from "drizzle-orm";
import {
  boolean,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { products } from "./products";

export const regionTypeEnum = pgEnum("region_type", [
  "country",
  "region",
  "province",
  "city",
]);

export const regions = pgTable("regions", {
  id: uuid("id").primaryKey().defaultRandom(),
  parentId: uuid("parent_id").references((): any => regions.id),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  type: regionTypeEnum("type").notNull().default("province"),
  code: varchar("code", { length: 50 }),
  description: text("description"),
  image: varchar("image", { length: 500 }),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const specialties = pgTable("specialties", {
  id: uuid("id").primaryKey().defaultRandom(),
  regionId: uuid("region_id").references(() => regions.id, {
    onDelete: "set null",
  }),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  image: varchar("image", { length: 500 }),
  isFeatured: boolean("is_featured").notNull().default(false),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const productRegions = pgTable(
  "product_regions",
  {
    productId: uuid("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    regionId: uuid("region_id")
      .notNull()
      .references(() => regions.id, { onDelete: "cascade" }),
    isPrimary: boolean("is_primary").notNull().default(false),
  },
  (table) => [
    primaryKey({ columns: [table.productId, table.regionId] }),
  ],
);

export const productSpecialties = pgTable(
  "product_specialties",
  {
    productId: uuid("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    specialtyId: uuid("specialty_id")
      .notNull()
      .references(() => specialties.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({ columns: [table.productId, table.specialtyId] }),
  ],
);

export const regionsRelations = relations(regions, ({ many, one }) => ({
  parent: one(regions, {
    fields: [regions.parentId],
    references: [regions.id],
  }),
  children: many(regions),
  specialties: many(specialties),
  productRegions: many(productRegions),
}));

export const specialtiesRelations = relations(specialties, ({ one, many }) => ({
  region: one(regions, {
    fields: [specialties.regionId],
    references: [regions.id],
  }),
  productSpecialties: many(productSpecialties),
}));

export const productRegionsRelations = relations(productRegions, ({ one }) => ({
  product: one(products, {
    fields: [productRegions.productId],
    references: [products.id],
  }),
  region: one(regions, {
    fields: [productRegions.regionId],
    references: [regions.id],
  }),
}));

export const productSpecialtiesRelations = relations(productSpecialties, ({ one }) => ({
  product: one(products, {
    fields: [productSpecialties.productId],
    references: [products.id],
  }),
  specialty: one(specialties, {
    fields: [productSpecialties.specialtyId],
    references: [specialties.id],
  }),
}));
