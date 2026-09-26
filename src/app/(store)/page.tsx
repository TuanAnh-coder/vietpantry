import MorphSlider from "~/components/ui/MorphSlider";
import CategoriesComponent from "./_components/top-categories";
import ProductList from "./_components/product-list";
import QualityComponent from "./_components/quality";
import HotDeals from "./_components/best-seller";
import LatestNews from "./_components/blog";
import VideoTestimonials from "./_components/ads";
import Image from "next/image";
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
const item = [
    { image: 'https://picsum.photos/id/1015/600/400', title: 'Peaks', href: 'https://example.com/one' },
    { image: 'https://picsum.photos/id/1025/600/400', title: 'Pup', href: 'https://example.com/two' },
    { image: 'https://picsum.photos/id/1039/600/400', title: 'Falls', href: 'https://example.com/three' },
];
const collection = [
    {
        title: "Vegetable3",
        product: [
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi tươi mọng nước, vị ngọt thanh tự nhiên, thích hợp dùng trực tiếp, làm salad hoặc chế biến các món ăn hằng ngày.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Tươi mỗi ngày", "Tự nhiên"],
            },
            {
                title: "Green Lemons",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Chanh xanh tươi, mọng nước với vị chua thanh và hương thơm đặc trưng, phù hợp pha nước uống, làm gia vị hoặc chế biến món ăn.",
                origin: "Bến Tre, Việt Nam",
                weight: "500g",
                unit: "Túi",
                tags: ["Tươi", "Nông sản Việt"],
            },
            {
                title: "Avocados Lemon",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Bơ tươi có thịt dẻo mịn, béo tự nhiên và giàu dưỡng chất, thích hợp dùng trực tiếp, làm sinh tố hoặc kết hợp cùng các món salad.",
                origin: "Đắk Lắk, Việt Nam",
                weight: "1kg",
                unit: "Túi",
                tags: ["Giàu dinh dưỡng", "Tự nhiên"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Những quả cà chua bi nhỏ, căng mọng với màu sắc tự nhiên và vị ngọt nhẹ, mang đến sự tươi ngon cho mọi bữa ăn.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Tươi mỗi ngày", "Nông sản Việt"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi được tuyển chọn từ những quả tươi ngon, mọng nước và có vị ngọt thanh tự nhiên.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Tươi", "Tự nhiên"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi tươi ngon, dễ sử dụng trong các món salad, món xào hoặc dùng như một món ăn nhẹ giàu vitamin.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Giàu vitamin", "Tươi mỗi ngày"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi đỏ mọng với vị ngọt dịu, được lựa chọn kỹ để giữ được độ tươi ngon và chất lượng khi đến tay khách hàng.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Nông sản Việt", "Tự nhiên"],
            },
        ],
    },

    {
        title: "Vegetable2",
        product: [
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi tươi mọng, vị ngọt thanh tự nhiên, phù hợp cho salad, món ăn gia đình hoặc dùng trực tiếp.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Tươi", "Tự nhiên"],
            },
            {
                title: "Green Lemons",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Chanh xanh mọng nước, vị chua thanh và hương thơm tự nhiên, phù hợp pha chế và làm gia vị cho nhiều món ăn.",
                origin: "Bến Tre, Việt Nam",
                weight: "500g",
                unit: "Túi",
                tags: ["Nông sản Việt", "Tươi"],
            },
            {
                title: "Avocados Lemon",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Bơ tươi với phần thịt mềm mịn, béo thơm tự nhiên, thích hợp làm sinh tố, salad hoặc dùng trực tiếp.",
                origin: "Đắk Lắk, Việt Nam",
                weight: "1kg",
                unit: "Túi",
                tags: ["Giàu dinh dưỡng", "Tự nhiên"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi đỏ tươi, mọng nước và có vị ngọt nhẹ, mang đến sự tươi mới cho các món ăn hằng ngày.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Tươi mỗi ngày"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi được tuyển chọn kỹ, đảm bảo độ tươi và hương vị tự nhiên trong từng quả.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Tự nhiên"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi mọng nước, vị ngọt thanh, dễ kết hợp với nhiều món ăn từ salad đến các món chế biến hằng ngày.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Tươi", "Nông sản Việt"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Những quả cà chua bi tươi ngon với màu sắc tự nhiên, được lựa chọn để mang đến trải nghiệm trọn vẹn từ nông trại đến bàn ăn.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Tươi mỗi ngày", "Tự nhiên"],
            },
        ],
    },

    {
        title: "Vegetable1",
        product: [
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi tươi mọng, vị ngọt thanh tự nhiên, thích hợp dùng trực tiếp hoặc chế biến các món ăn gia đình.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Tươi", "Tự nhiên"],
            },
            {
                title: "Green Lemons",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Chanh xanh tươi với vị chua thanh, mọng nước và hương thơm đặc trưng, thích hợp pha nước uống hoặc làm gia vị.",
                origin: "Bến Tre, Việt Nam",
                weight: "500g",
                unit: "Túi",
                tags: ["Tươi", "Nông sản Việt"],
            },
            {
                title: "Avocados Lemon",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Bơ tươi dẻo mịn, béo thơm tự nhiên và giàu dưỡng chất, phù hợp cho sinh tố, salad hoặc dùng trực tiếp.",
                origin: "Đắk Lắk, Việt Nam",
                weight: "1kg",
                unit: "Túi",
                tags: ["Giàu dinh dưỡng", "Tự nhiên"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi đỏ mọng, vị ngọt nhẹ và giàu vitamin, là lựa chọn tiện lợi cho những bữa ăn tươi ngon mỗi ngày.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Giàu vitamin", "Tươi"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi tươi ngon được tuyển chọn kỹ, giữ trọn độ mọng nước và hương vị tự nhiên.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Tự nhiên"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Cà chua bi nhỏ gọn, mọng nước với vị ngọt thanh, phù hợp cho salad, món ăn nhẹ và các bữa cơm gia đình.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Tươi mỗi ngày"],
            },
            {
                title: "Cherry Tomato",
                price: "8.00",
                img: "/bapcai1.webp",
                description:
                    "Từ những vùng đất màu mỡ của Việt Nam, cà chua bi được chọn lọc để mang đến vị tươi ngon tự nhiên trong từng sản phẩm.",
                origin: "Đà Lạt, Việt Nam",
                weight: "500g",
                unit: "Hộp",
                tags: ["Nông sản Việt", "Tự nhiên"],
            },
        ],
    },
];
export default function HomePage() {
    return (
        <div className="py-2">
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
                        autoplayDelay={2}
                        loop
                        radius={16}
                        showCaptions
                        showControls
                        showIndicators
                    />
                </div>
            </div>
            {/* Top sell */}
            <div className="w-full bg-[url(/b4.webp)] mt-2 bg-cover bg-no-repeat">
                <div className="max-w-7xl w-full mx-auto py-6">
                    <h2 className="text-center text-2xl font-bold py-4 text-green-700">Shoping by top categories</h2>
                    <ProductList collection={collection} />
                </div>
            </div>
            {/* Best seller */}
            <HotDeals />
            {/* Thumbnail */}
            <section className="relative overflow-hidden w-full max-w-7xl mx-auto rounded-lg">
                <Image
                    src="/sale.png"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />

                <div className="relative z-10 mx-auto flex max-w-7xl items-center px-6 md:min-h-[500px]">
                    <div className="ml-auto w-full max-w-xl text-center md:text-left">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                            Từ thiên nhiên đến bàn ăn
                        </p>

                        <h2 className="text-4xl font-extrabold leading-tight text-emerald-950 md:text-5xl lg:text-5xl">
                            Tinh hoa nông sản Việt
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-6 text-gray-600 md:text-base">
                            Tươi ngon mỗi ngày • Nguồn gốc rõ ràng • Chọn lọc kỹ càng
                        </p>

                        <button className="mt-7 rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                            Khám phá ngay
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </section>
            {/* Feedback */}
            <VideoTestimonials />
            {/* Quality */}
            <QualityComponent />
            {/* News */}
            <LatestNews />
        </div>
    )
}