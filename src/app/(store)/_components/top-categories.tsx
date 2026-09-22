import Image from "next/image";

const CategoriesComponent = ({ categories }: { categories: any }) => {
    return (
        <div className="w-full max-w-sm p-4 px-8 relative bg-[#edf3f1] rounded-lg overflow-hidden">
            {/* Head */}
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-green-700 text-xl font-bold">Top Categories</h1>
            </div>
            <div className="flex flex-col gap-4 mt-6 items-stretch justify-center">
                {categories.map((items, index) => (
                    <div className="grid grid-cols-[1fr_11fr] items-center gap-3" key={index}>
                        <div className="flex size-6 items-center justify-center">
                            <Image src={items.img} alt={items.title} width={48} height={48} className="object-contain" />
                        </div>

                        <div className="min-w-0">
                            <h3 className="text-lg font-bold leading-tight text-[#101010]">
                                {items.title}
                            </h3>
                            <p className="mt-1 text-xs leading-none text-[#54706c]">
                                {items.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10 flex items-center justify-center">
                <Image src={'/cart.png'} width={200} height={200} alt="logo" className="object-contain" />
                <svg viewBox="0 0 568 89" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20C12 24 24 8 38 12C52 16 68 20 82 14C96 8 124 0 152 14C180 28 188 34 212 38C238 42 244 24 272 18C300 12 316 15 340 23C364 31 376 27 390 22C404 17 418 2 442 1C466 0 486 22 492 25C498 28 505 28 512 28C522 28 528 25 538 20C548 16 558 14 568 13V89H0V20Z" fill="#c5dea4" />
                </svg>
            </div>
        </div>
    )
}
export default CategoriesComponent