import MorphSlider from "~/components/ui/MorphSlider";
import CategoriesComponent from "./_components/top-categories";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const topCategories = [
    {
        img: "/vegetable.png",
        title: "Organic Vegetables",
        description: "More than 20 different types of vegetables"
    },
    {
        img: "/cate-bee.png",
        title: "Bee Products",
        description: "Get the freshest salmon and ocean trout"
    },

    {
        img: "/cate-salmon.png",
        title: "Salmon",
        description: "Get the freshest salmon and ocean trout"
    },
    {
        img: "/cate-fruits.png",
        title: "Fresh Fruits",
        description: "More than 20 different types of vegetables"
    },
]
const items = [
    { image: 'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=1600&auto=format&fit=crop', caption: 'One' },
    { image: 'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=1600&auto=format&fit=crop', caption: 'Two' },
    { image: 'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=1600&auto=format&fit=crop', caption: 'Three' }
]
const collection = [
    {
        title: "Vegetable",
        product: [
            {
                title: "Cherry Tomato",
                price: "8.00"
            },
            {
                title: "Green Lemons",
                price: "8.00"
            },
            {
                title: "Evocados Lemon",
                price: "8.00"
            },
            {
                title: "Cherry Tomato",
                price: "8.00"
            },
            {
                title: "Cherry Tomato",
                price: "8.00"
            },
            {
                title: "Cherry Tomato",
                price: "8.00"
            },
            {
                title: "Cherry Tomato",
                price: "8.00"
            },
        ]
    }
]
export default function HomePage() {
    return (
        <>
            <div className="flex items-stretch justify-between gap-2 w-full max-w-7xl mx-auto">
                <CategoriesComponent categories={topCategories} />
                <div className="min-w-0 flex-1">
                    <MorphSlider
                        items={items}
                        transition="melt"
                        intensity={0.55}
                        aberration={0.35}
                        drift={0.4}
                        autoplay={false}
                        overlayColor="#05060a"
                        duration={1.1}
                        ease="power2.inOut"
                        scale={2.4}
                        autoplayDelay={4}
                        loop
                        radius={16}
                        showCaptions
                        showControls
                        showIndicators
                    />
                </div>
            </div>
            <div className="w-full bg-[url(/b4.webp)] mt-2 bg-cover bg-no-repeat">
                <div className="max-w-7xl w-full mx-auto py-6">
                    <h2 className="text-center text-3xl font-bold py-4">Top Offers This Week</h2>
                    <Tabs defaultValue="vegetable" className="w-full max-w-2xl mx-auto mt-6">
                        <TabsList className="w-full h-[38px] p-0 rounded-none bg-[#E5F3F2] gap-0 bg-transparent">
                            <TabsTrigger
                                value="vegetable"
                                className="relative flex-1 h-full inline-flex items-center justify-center gap-1.5 rounded-none border-0 border-transparent bg-transparent px-4 py-0.5 whitespace-nowrap text-[18px] font-medium text-[#222222] shadow-none transition-all hover:bg-transparent hover:text-[#01693A] focus:bg-transparent focus-visible:bg-transparent data-active:!bg-transparent data-active:!text-[#01693A] data-active:!shadow-none data-active:after:opacity-0"
                            >
                                Vegetable
                            </TabsTrigger>

                            <TabsTrigger
                                value="fresh-fruits"
                                className="relative flex-1 h-full inline-flex items-center justify-center gap-1.5 rounded-none border-0 border-transparent bg-transparent px-4 py-0.5 whitespace-nowrap text-[18px] font-medium text-[#222222] shadow-none transition-all hover:bg-transparent hover:text-[#01693A] focus:bg-transparent focus-visible:bg-transparent data-active:!bg-transparent data-active:!text-[#01693A] data-active:!shadow-none data-active:after:opacity-0"
                            >
                                Fresh Fruits
                            </TabsTrigger>

                            <TabsTrigger
                                value="fruit-juice"
                                className="relative flex-1 h-full inline-flex items-center justify-center gap-1.5 rounded-none border-0 border-transparent bg-transparent px-4 py-0.5 whitespace-nowrap text-[18px] font-medium text-[#222222] shadow-none transition-all hover:bg-transparent hover:text-[#01693A] focus:bg-transparent focus-visible:bg-transparent data-active:!bg-transparent data-active:!text-[#01693A] data-active:!shadow-none data-active:after:opacity-0"
                            >
                                Fruit Juice
                            </TabsTrigger>

                            <TabsTrigger
                                value="bee-products"
                                className="relative flex-1 h-full inline-flex items-center justify-center gap-1.5 rounded-none border-0 border-transparent bg-transparent px-4 py-0.5 whitespace-nowrap text-[18px] font-medium text-[#222222] shadow-none transition-all hover:bg-transparent hover:text-[#01693A] focus:bg-transparent focus-visible:bg-transparent data-active:!bg-transparent data-active:!text-[#01693A] data-active:!shadow-none data-active:after:opacity-0"
                            >
                                Bee Products
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="vegetable" className="mt-6 outline-none">
                            <div className="grid grid-cols-4 gap-4">
                                Vegetable products
                            </div>
                        </TabsContent>

                        <TabsContent value="fresh-fruits" className="mt-6 outline-none">
                            <div className="grid grid-cols-4 gap-4">
                                Fresh fruit products
                            </div>
                        </TabsContent>

                        <TabsContent value="fruit-juice" className="mt-6 outline-none">
                            <div className="grid grid-cols-4 gap-4">
                                Fruit juice products
                            </div>
                        </TabsContent>

                        <TabsContent value="bee-products" className="mt-6 outline-none">
                            <div className="grid grid-cols-4 gap-4">
                                Bee products
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}