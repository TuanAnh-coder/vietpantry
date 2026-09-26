const testimonials = [
    {
        name: "Robert Koon",
        role: "Customer",
        avatar: "/avatars/user-1.jpg",
        content:
            "Pellentesque eu nibh eget mauris congue mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    },
    {
        name: "Eleanor Russell",
        role: "Customer",
        avatar: "/avatars/user-2.jpg",
        content:
            "Pellentesque eu nibh eget mauris congue mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    },
    {
        name: "Eleanor Rena",
        role: "Customer",
        avatar: "/avatars/user-3.jpg",
        content:
            "Pellentesque eu nibh eget mauris congue mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    },
];

const VideoTestimonials = () => {
    return (
        <section className="relative w-full overflow-hidden mt-8">
            {/* VIDEO BACKGROUND */}
            <div className="relative h-[700px] w-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/pc_03.mp4" type="video/mp4" />
                </video>

                {/* Video overlay */}
                <div className="absolute inset-0 bg-black/25" />

                {/* Hero text */}
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
                    <div>
                        <p className="mb-3 text-sm tracking-[0.35em]">
                            TAKE A TRIP
                        </p>

                        <h2 className="text-4xl font-extrabold md:text-6xl">
                            EXPLORE OUR ORGANIC FARM
                        </h2>

                        <p className="mt-4 text-lg">
                            Providing High Quality Products
                        </p>
                    </div>
                </div>
            </div>

            {/* TESTIMONIALS */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <div className="mx-auto max-w-6xl px-4 pb-8">
                    {/* Header */}
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white drop-shadow-md">
                            Client Testimonials
                        </h3>

                        <div className="flex gap-2">
                            <button
                                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full bg-white text-gray-700
                  shadow
                  transition hover:bg-gray-100
                "
                            >
                                ←
                            </button>

                            <button
                                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full bg-green-600 text-white
                  shadow
                  transition hover:bg-green-700
                "
                            >
                                →
                            </button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        {testimonials.map((item) => (
                            <div
                                key={item.name}
                                className="
                  rounded-md bg-white
                  p-4 shadow-lg
                "
                            >
                                {/* Quote */}
                                <div className="mb-1 text-xl font-bold text-green-400">
                                    “
                                </div>

                                {/* Content */}
                                <p className="line-clamp-3 text-[10px] leading-relaxed text-gray-500">
                                    {item.content}
                                </p>

                                {/* User */}
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="h-8 w-8 rounded-full object-cover"
                                        />

                                        <div>
                                            <p className="text-[11px] font-semibold text-gray-800">
                                                {item.name}
                                            </p>

                                            <p className="text-[9px] text-gray-400">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="text-[10px] tracking-tight text-orange-500">
                                        ★★★★★
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;