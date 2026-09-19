import Image from "next/image";
import CarouselComponent from "./_components/layout/body/carousel";

const MOCK_CATEGORIES = [
    {
        id: "cat-001",
        name: "Fresh Fruit",
        slug: "fresh-fruit",
        image:
            "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=500&q=80",
        isActive: false,
    },
    {
        id: "cat-002",
        name: "Fresh Vegetables",
        slug: "fresh-vegetables",
        image:
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
        isActive: true,
    },
    {
        id: "cat-003",
        name: "Meat & Fish",
        slug: "meat-fish",
        image:
            "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=500&q=80",
        isActive: false,
    },
    {
        id: "cat-004",
        name: "Snacks",
        slug: "snacks",
        image:
            "https://images.unsplash.com/photo-1621939514649-280e2aa9f5f3?auto=format&fit=crop&w=500&q=80",
        isActive: false,
    },
    {
        id: "cat-005",
        name: "Beverages",
        slug: "beverages",
        image:
            "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=80",
        isActive: false,
    },
    {
        id: "cat-006",
        name: "Beauty & Health",
        slug: "beauty-health",
        image:
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80",
        isActive: false,
    },
    {
        id: "cat-007",
        name: "Bread & Bakery",
        slug: "bread-bakery",
        image:
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
        isActive: false,
    },
    {
        id: "cat-008",
        name: "Baking Needs",
        slug: "baking-needs",
        image:
            "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=500&q=80",
        isActive: false,
    },
    {
        id: "cat-009",
        name: "Cooking",
        slug: "cooking",
        image:
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=500&q=80",
        isActive: false,
    },
    {
        id: "cat-010",
        name: "Diabetic Food",
        slug: "diabetic-food",
        image:
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80",
        isActive: false,
    },
    {
        id: "cat-011",
        name: "Dish Detergents",
        slug: "dish-detergents",
        image:
            "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&w=500&q=80",
        isActive: false,
    },
    {
        id: "cat-012",
        name: "Oil",
        slug: "oil",
        image:
            "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
        isActive: false,
    },
];
export default function Home() {
    return (
        <>
            <div className="grid w-full grid-cols-3 gap-1.5">
                <div className="col-span-2 overflow-hidden">
                    <CarouselComponent />
                </div>
                <div className="grid grid-rows-2 gap-1.5">
                    <div className="overflow-hidden">
                        <img
                            src="/b1.webp"
                            alt=""
                            className="block h-full w-full object-cover"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <img
                            src="/b2.webp"
                            alt=""
                            className="block h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="py-8 mt-8">
                <p className="text-center font-light text-sm tracking-wider uppercase text-green-500">Category</p>
                <h1 className="font-bold text-2xl text-center">All Categories</h1>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 py-8">
                    {MOCK_CATEGORIES.map((category) => (
                        <div
                            key={category.id}
                            className={[
                                "group flex h-[160px] cursor-pointer flex-col",
                                "items-center justify-between",
                                "border bg-white p-3",
                                "transition-all duration-200",
                                category.isActive
                                    ? "border-green-600 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                                    : "border-gray-200 hover:border-green-500",
                            ].join(" ")}
                        >
                            {/* Image */}
                            <div className="flex h-[115px] w-full items-center justify-center">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    width={150}
                                    height={110}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Name */}
                            <span
                                className={[
                                    "text-center text-sm font-medium",
                                    category.isActive
                                        ? "text-green-700"
                                        : "text-gray-900",
                                ].join(" ")}
                            >
                                {category.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}