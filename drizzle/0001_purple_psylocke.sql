CREATE TYPE "public"."region_type" AS ENUM('country', 'region', 'province', 'city');--> statement-breakpoint
CREATE TABLE "product_regions" (
	"product_id" uuid NOT NULL,
	"region_id" uuid NOT NULL,
	"is_primary" boolean DEFAULT false NOT NULL,
	CONSTRAINT "product_regions_product_id_region_id_pk" PRIMARY KEY("product_id","region_id")
);
--> statement-breakpoint
CREATE TABLE "product_specialties" (
	"product_id" uuid NOT NULL,
	"specialty_id" uuid NOT NULL,
	CONSTRAINT "product_specialties_product_id_specialty_id_pk" PRIMARY KEY("product_id","specialty_id")
);
--> statement-breakpoint
CREATE TABLE "regions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"parent_id" uuid,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"type" "region_type" DEFAULT 'province' NOT NULL,
	"code" varchar(50),
	"description" text,
	"image" varchar(500),
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "regions_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "specialties" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"region_id" uuid,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" text,
	"image" varchar(500),
	"is_featured" boolean DEFAULT false NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "specialties_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "origin_region_id" uuid;--> statement-breakpoint
ALTER TABLE "product_regions" ADD CONSTRAINT "product_regions_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_regions" ADD CONSTRAINT "product_regions_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_specialties" ADD CONSTRAINT "product_specialties_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_specialties" ADD CONSTRAINT "product_specialties_specialty_id_specialties_id_fk" FOREIGN KEY ("specialty_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "regions" ADD CONSTRAINT "regions_parent_id_regions_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."regions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "specialties" ADD CONSTRAINT "specialties_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_origin_region_id_regions_id_fk" FOREIGN KEY ("origin_region_id") REFERENCES "public"."regions"("id") ON DELETE set null ON UPDATE no action;