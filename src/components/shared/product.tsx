import Image from "next/image";
import { Rating } from "./rating";
import { ShoppingBagIcon } from "lucide-react";

const ProductCard = ({
    product,
}: {
    product: (typeof products)[number];
}) => {
    return (
        <div className="cursor-pointer group relative flex min-w-0 flex-col overflow-hidden border border-gray-200 bg-white hover:border-green-700">
            {/* Sale */}
            {product.sale && (
                <span className="absolute left-2 top-2 z-10 rounded-[2px] bg-red-500 px-1.5 py-0.5 text-xs font-medium text-white">
                    {product.sale}
                </span>
            )}

            {/* Product image */}
            <div className="relative h-[108px] w-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 120px"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Product info */}
            <div className="mt-auto px-2 pb-2">
                <div className="mb-0.5 truncate text-sm font-medium text-green-700">
                    {product.name}
                </div>

                <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-gray-800">
                        {product.price}
                    </span>

                    {product.oldPrice && (
                        <span className="text-[8px] text-gray-400 line-through">
                            {product.oldPrice}
                        </span>
                    )}
                </div>

                <div className="mt-0.5 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Rating rating={product.rating} />

                        <span className="text-[7px] text-gray-400">
                            (24)
                        </span>
                    </div>

                    <button
                        type="button"
                        className="cursor-pointer flex p-2 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-green-600 hover:text-white"
                    >
                        <ShoppingBagIcon className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};
export { ProductCard }