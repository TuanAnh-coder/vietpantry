import Image from "next/image";
import {
    ArrowRight,
    CalendarDays,
    MessageCircle,
    UserRound,
} from "lucide-react";

const news = [
    {
        image: "/quality.webp",
        day: "18",
        month: "NOV",
        category: "Food",
        author: "Admin",
        comments: 65,
        title:
            "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
        image: "/quality.webp",
        day: "29",
        month: "JAN",
        category: "Food",
        author: "Admin",
        comments: 65,
        title:
            "Eget lobortis lorem lacinia. Vivamus pharetra semper.",
    },
    {
        image: "/quality.webp",
        day: "21",
        month: "FEB",
        category: "Food",
        author: "Admin",
        comments: 65,
        title:
            "Maecenas blandit risus elementum mauris malesuada.",
    },
];

const LatestNews = () => {
    return (
        <section className="w-full bg-white py-8 mt-4">
            <div className="mx-auto w-full max-w-7xl">
                {/* Heading */}
                <div className="mb-8 flex justify-center">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Latest News
                    </h2>
                </div>

                {/* News grid */}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {news.map((item) => (
                        <article
                            key={item.title}
                            className="group overflow-hidden rounded-md border border-gray-200 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                        >
                            {/* Image */}
                            <div className="relative aspect-[1.7/1] w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Date */}
                                <div className="absolute bottom-2 left-3 flex gap-1 px-2 items-center rounded-[2px] bg-white shadow-md">
                                    <span className="text-xs font-semibold  text-gray-800">
                                        {item.day}
                                    </span>

                                    <span className="text-xs font-medium uppercase text-gray-500">
                                        {item.month}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-3 py-2.5">
                                {/* Meta */}
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <CalendarDays className="h-5 w-5" />
                                        {item.category}
                                    </span>

                                    <span className="text-gray-200">|</span>

                                    <span className="flex items-center gap-1">
                                        <UserRound className="h-5 w-5" />
                                        By {item.author}
                                    </span>

                                    <span className="text-gray-200">|</span>

                                    <span className="flex items-center gap-1">
                                        <MessageCircle className="h-5 w-5" />
                                        {item.comments} Comments
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="mt-4 line-clamp-2 min-h-[30px] text-sm font-semibold leading-[1.45] text-gray-800">
                                    {item.title}
                                </h3>

                                {/* Read more */}
                                <button
                                    type="button"
                                    className="group/read mt-2 flex items-center ml-auto gap-1 text-xs font-semibold text-green-600"
                                >
                                    Read More

                                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover/read:translate-x-1" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;