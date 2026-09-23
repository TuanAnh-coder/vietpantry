import Image from "next/image";
import {
    Heart,
    ShoppingBag,
    Eye,
    LockKeyhole,
    ArrowRight,
} from "lucide-react";
import { Rating } from "~/components/shared/rating";
import { ProductCard } from "~/components/shared/product";

const products = [
    {
        name: "Chinese cabbage",
        image: "/products/cabbage.png",
        price: "$12.00",
        oldPrice: "$24.00",
        rating: 4,
        reviews: 124,
        sale: "Sale 50%",
    },
    {
        name: "Green Lettuce",
        image: "/products/lettuce.png",
        price: "$9.00",
        rating: 4,
    },
    {
        name: "Eggplant",
        image: "/products/eggplant.png",
        price: "$34.00",
        rating: 4,
    },
    {
        name: "Fresh Cauliflower",
        image: "/products/cauliflower.png",
        price: "$12.00",
        rating: 4,
    },
    {
        name: "Green Capsicum",
        image: "/products/capsicum.png",
        price: "$9.00",
        oldPrice: "$20.99",
        rating: 4,
        sale: "Sale 50%",
    },
    {
        name: "Green Chili",
        image: "/products/chili.png",
        price: "$34.00",
        rating: 4,
    },
    {
        name: "Big Potatoes",
        image: "/products/potatoes.png",
        price: "$12.00",
        rating: 4,
    },
    {
        name: "Corn",
        image: "/products/corn.png",
        price: "$12.00",
        rating: 4,
    },
    {
        name: "Red Chili",
        image: "/products/red-chili.png",
        price: "$12.00",
        rating: 4,
    },
    {
        name: "Red Tomatoes",
        image: "/products/tomatoes.png",
        price: "$9.00",
        oldPrice: "$20.99",
        rating: 4,
        sale: "Sale 50%",
    },
    {
        name: "Surjupur Mango",
        image: "/products/mango.png",
        price: "$34.00",
        rating: 4,
    },
];

const FeaturedProduct = () => {
    const product = products[0];

    return (
        <div className="group relative col-span-2 row-span-2 flex flex-col overflow-hidden border-r border-b border-gray-200 bg-white">
            {/* Badges */}
            <div className="absolute left-3 top-3 z-20 flex gap-1">
                <span className="rounded-[2px] bg-red-500 px-1.5 py-0.5 text-[7px] font-medium text-white">
                    Sale 50%
                </span>

                <span className="rounded-[2px] bg-blue-500 px-1.5 py-0.5 text-[7px] font-medium text-white">
                    Best Sale
                </span>
            </div>

            {/* Image */}
            <div className="relative h-[185px] w-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    sizes="240px"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Action row */}
            <div className="flex items-center gap-2 px-3">
                <button
                    type="button"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                >
                    <Heart className="h-3 w-3" />
                </button>

                <button
                    type="button"
                    className="flex h-7 flex-1 items-center justify-center gap-1.5 rounded-full bg-green-600 text-[8px] font-semibold text-white transition-colors hover:bg-green-700"
                >
                    Add to Cart
                    <ShoppingBag className="h-3 w-3" />
                </button>

                <button
                    type="button"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                >
                    <Eye className="h-3 w-3" />
                </button>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center px-3 pt-3 text-center">
                <h3 className="text-[10px] font-medium text-green-700">
                    {product.name}
                </h3>

                <div className="mt-1 flex items-center gap-1">
                    <span className="text-[11px] font-bold text-gray-800">
                        {product.price}
                    </span>

                    <span className="text-[9px] text-gray-400 line-through">
                        {product.oldPrice}
                    </span>
                </div>

                <div className="mt-1 flex items-center gap-1">
                    <Rating rating={5} />

                    <span className="text-[7px] text-gray-400">
                        (124 Feedbacks)
                    </span>
                </div>

                <p className="mt-1 text-[7px] text-gray-400">
                    Hurry up! Offer ends
                </p>
            </div>

            {/* Countdown */}
            <div className="mt-auto flex justify-center gap-3 px-3 pb-3 pt-2">
                {[
                    ["01", "DAYS"],
                    ["23", "HOURS"],
                    ["34", "MINS"],
                    ["57", "SECS"],
                ].map(([value, label]) => (
                    <div
                        key={label}
                        className="flex flex-col items-center"
                    >
                        <span className="text-[10px] font-semibold text-gray-700">
                            {value}
                        </span>

                        <span className="text-[6px] text-gray-400">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function HotDeals() {
    return (
        <section className="w-full py-8">
            <div className="mx-auto w-full max-w-7xl">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold tracking-tight text-gray-800">
                        Hot Deals
                    </h2>

                    <button
                        type="button"
                        className="group flex items-center gap-1 text-[9px] font-medium text-green-600"
                    >
                        View All

                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-5 overflow-hidden border-l border-t border-gray-200">
                    {/* Featured */}
                    <FeaturedProduct />

                    {/* Right + bottom products */}
                    {products.slice(1).map((product) => (
                        <ProductCard
                            key={product.name}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}