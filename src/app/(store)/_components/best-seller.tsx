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
        image: "/bapcai1.webp",
        price: "$12.00",
        oldPrice: "$24.00",
        rating: 4,
        reviews: 124,
        sale: "Sale 50%",
    },
    {
        name: "Green Lettuce",
        image: "/bapcai1.webp",
        price: "$9.00",
        rating: 4,
    },
    {
        name: "Eggplant",
        image: "/bapcai1.webp",
        price: "$34.00",
        rating: 4,
    },
    {
        name: "Fresh Cauliflower",
        image: "/bapcai1.webp",
        price: "$12.00",
        rating: 4,
    },
    {
        name: "Green Capsicum",
        image: "/bapcai1.webp",
        price: "$9.00",
        oldPrice: "$20.99",
        rating: 4,
        sale: "Sale 50%",
    },
    {
        name: "Green Chili",
        image: "/bapcai1.webp",
        price: "$34.00",
        rating: 4,
    },
    {
        name: "Big Potatoes",
        image: "/bapcai1.webp",
        price: "$12.00",
        rating: 4,
    },
    {
        name: "Corn",
        image: "/bapcai1.webp",
        price: "$12.00",
        rating: 4,
    },
    {
        name: "Red Chili",
        image: "/bapcai1.webp",
        price: "$12.00",
        rating: 4,
    },
    {
        name: "Red Tomatoes",
        image: "/bapcai1.webp",
        price: "$9.00",
        oldPrice: "$20.99",
        rating: 4,
        sale: "Sale 50%",
    },
    {
        name: "Surjupur Mango",
        image: "/bapcai1.webp",
        price: "$34.00",
        rating: 4,
    },
];

const FeaturedProduct = () => {
    const product = products[0];

    return (
        <div className="cursor-pointer group relative col-span-2 row-span-2 flex flex-col overflow-hidden border-1 bg-white hover:!border-green-700">
            {/* Badges */}
            <div className="absolute left-3 top-3 z-20 flex gap-1">
                <span className="rounded-[2px] bg-red-500 px-1.5 py-0.5 text-xs font-medium text-white">
                    Sale 50%
                </span>

                <span className="rounded-[2px] bg-blue-500 px-1.5 py-0.5 text-xs font-medium text-white">
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
            {/* Content */}
            <div className="flex flex-col items-center px-3 pt-3 text-center">
                <h3 className="text-sm font-semibold text-green-700">
                    {product.name}
                </h3>

                <div className="mt-1 flex items-center gap-1">
                    <span className="text-sm font-bold text-gray-800">
                        {product.price}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                        {product.oldPrice}
                    </span>
                </div>

                <div className="mt-1 flex items-center gap-1">
                    <Rating rating={5} />

                    <span className="text-xs text-gray-400">
                        (124 Feedbacks)
                    </span>
                </div>

                <p className="mt-1 text-xs text-gray-700">
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
                        <span className="text-sm font-semibold text-gray-700">
                            {value}
                        </span>

                        <span className="text-[9px] text-gray-400">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
            {/* Action row */}
            <div className="flex items-center gap-2 p-3">
                <button
                    type="button"
                    className="flex p-2 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                >
                    <Heart className="h-5 w-5" />
                </button>

                <button
                    type="button"
                    className="flex p-2 flex-1 items-center justify-center gap-1.5 rounded-full bg-green-600 text-[8px] font-semibold text-white transition-colors hover:bg-green-700"
                >
                    <span className="text-xs">Add to Cart</span>
                    <ShoppingBag className="h-5 w-5" />
                </button>

                <button
                    type="button"
                    className="flex p-2 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                >
                    <Eye className="h-5 w-5" />
                </button>
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
                    <h2 className="text-2xl font-bold tracking-tight text-green-700">
                        Hot Deals
                    </h2>

                    <button
                        type="button"
                        className="group flex items-center gap-1 text-sm cursor-pointer font-medium text-green-600"
                    >
                        View All
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-5 gap-1 overflow-hidden">
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