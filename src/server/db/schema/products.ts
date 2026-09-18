import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  jsonb,
  numeric,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { categories } from "./categories";
import { collections } from "./collection";
import { users } from "./user";

export const productStatusEnum = pgEnum("product_status", [
  "draft",
  "active",
  "out_of_stock",
  "archived",
]);

export const productUnitEnum = pgEnum("product_unit", [
  "kg",
  "bundle",
  "box",
  "piece",
  "bunch",
  "tray",
]);

export const reviewStatusEnum = pgEnum("review_status", [
  "pending",
  "approved",
  "rejected",
]);

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

export const products = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  shortDescription: text("short_description"),
  description: text("description"),
  sku: varchar("sku", { length: 100 }).notNull().unique(),
  barcode: varchar("barcode", { length: 100 }),
  status: productStatusEnum("status").notNull().default("draft"),
  unit: productUnitEnum("unit").notNull().default("kg"),
  weightGrams: integer("weight_grams"),
  origin: varchar("origin", { length: 255 }),
  originRegionId: uuid("origin_region_id").references(() => regions.id, {
    onDelete: "set null",
  }),
  isOrganic: boolean("is_organic").notNull().default(false),
  isFeatured: boolean("is_featured").notNull().default(false),
  basePrice: numeric("base_price", { precision: 12, scale: 2 }).notNull(),
  salePrice: numeric("sale_price", { precision: 12, scale: 2 }),
  costPrice: numeric("cost_price", { precision: 12, scale: 2 }),
  stockQuantity: integer("stock_quantity").notNull().default(0),
  lowStockThreshold: integer("low_stock_threshold").notNull().default(10),
  ratingAverage: numeric("rating_average", { precision: 3, scale: 2 }).default("0"),
  reviewCount: integer("review_count").notNull().default(0),
  thumbnail: varchar("thumbnail", { length: 500 }),
  createdBy: uuid("created_by").references(() => users.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  deletedAt: timestamp("deleted_at"),
});

export const product = products;

export const productImages = pgTable("product_images", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  url: varchar("url", { length: 500 }).notNull(),
  altText: varchar("alt_text", { length: 255 }),
  sortOrder: integer("sort_order").notNull().default(0),
  isPrimary: boolean("is_primary").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
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

export const productCollections = pgTable(
  "product_collections",
  {
    productId: uuid("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    collectionId: uuid("collection_id")
      .notNull()
      .references(() => collections.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({ columns: [table.productId, table.collectionId] }),
  ],
);

export const productCategories = pgTable(
  "product_categories",
  {
    productId: uuid("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    categoryId: uuid("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({ columns: [table.productId, table.categoryId] }),
  ],
);

export const productVariants = pgTable("product_variants", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  sku: varchar("sku", { length: 100 }).notNull().unique(),
  attributes: jsonb("attributes").notNull().default({}),
  basePrice: numeric("base_price", { precision: 12, scale: 2 }).notNull(),
  salePrice: numeric("sale_price", { precision: 12, scale: 2 }),
  stockQuantity: integer("stock_quantity").notNull().default(0),
  isDefault: boolean("is_default").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const productReviews = pgTable("product_reviews", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  rating: integer("rating").notNull(),
  title: varchar("title", { length: 255 }),
  content: text("content"),
  status: reviewStatusEnum("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const productTags = pgTable("product_tags", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const productTagAssignments = pgTable(
  "product_tag_assignments",
  {
    productId: uuid("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    tagId: uuid("tag_id")
      .notNull()
      .references(() => productTags.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({ columns: [table.productId, table.tagId] }),
  ],
);

export const productsRelations = relations(products, ({ many, one }) => ({
  images: many(productImages),
  productCategories: many(productCategories),
  productCollections: many(productCollections),
  regions: many(productRegions),
  specialties: many(productSpecialties),
  variants: many(productVariants),
  reviews: many(productReviews),
  tagAssignments: many(productTagAssignments),
  originRegion: one(regions, {
    fields: [products.originRegionId],
    references: [regions.id],
  }),
}));

export const regionsRelations = relations(regions, ({ many, one }) => ({
  parent: one(regions, {
    fields: [regions.parentId],
    references: [regions.id],
  }),
  children: many(regions),
  specialties: many(specialties),
  originProducts: many(products),
  productRegions: many(productRegions),
}));

export const specialtiesRelations = relations(specialties, ({ one, many }) => ({
  region: one(regions, {
    fields: [specialties.regionId],
    references: [regions.id],
  }),
  productSpecialties: many(productSpecialties),
}));

export const productImagesRelations = relations(productImages, ({ one }) => ({
  product: one(products, {
    fields: [productImages.productId],
    references: [products.id],
  }),
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

export const productVariantsRelations = relations(productVariants, ({ one }) => ({
  product: one(products, {
    fields: [productVariants.productId],
    references: [products.id],
  }),
}));

export const productReviewsRelations = relations(productReviews, ({ one }) => ({
  product: one(products, {
    fields: [productReviews.productId],
    references: [products.id],
  }),
  user: one(users, {
    fields: [productReviews.userId],
    references: [users.id],
  }),
}));

export const productCategoriesRelations = relations(productCategories, ({ one }) => ({
  product: one(products, {
    fields: [productCategories.productId],
    references: [products.id],
  }),
  category: one(categories, {
    fields: [productCategories.categoryId],
    references: [categories.id],
  }),
}));

export const productCollectionsRelations = relations(productCollections, ({ one }) => ({
  product: one(products, {
    fields: [productCollections.productId],
    references: [products.id],
  }),
  collection: one(collections, {
    fields: [productCollections.collectionId],
    references: [collections.id],
  }),
}));