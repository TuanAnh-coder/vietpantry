import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";

const QualityComponent = () => {
    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-14">
            <div className="mx-auto w-full max-w-7xl">
                <div className="relative flex w-full items-center gap-6 lg:gap-10">

                    {/* ================= IMAGE ================= */}
                    <div className="relative flex w-[58%] shrink-0 items-end gap-3 lg:gap-4">

                        {/* Decorative leaf */}
                        <div className="absolute -left-3 bottom-0 z-10 rotate-[-25deg]">
                            <div className="h-7 w-12 rounded-[100%_0_100%_0] bg-green-500/80 blur-[0.2px]" />
                        </div>

                        {/* Small image */}
                        <div className="relative h-[230px] w-[38%] overflow-hidden rounded-lg shadow-sm">
                            <Image
                                src="/farmer.webp"
                                alt="Vietnamese farmer"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="22vw"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
                        </div>

                        {/* Main image */}
                        <div className="relative h-[280px] w-[62%] overflow-hidden rounded-lg shadow-sm">
                            <Image
                                src="/farmer-2.webp"
                                alt="Vietnamese farmer in orchard"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="36vw"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* ================= CONTENT ================= */}
                    <div className="w-full min-w-0 flex-1">

                        {/* Small label */}
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />

                            <span className="text-xs font-medium uppercase tracking-wider text-green-600">
                                VietPantry
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-lg font-bold leading-tight tracking-tight text-neutral-900 lg:text-xl">
                            100% Trusted
                            <br />
                            Organic Food Store
                        </h2>

                        {/* Features */}
                        <div className="mt-5 space-y-4">

                            {/* Feature 1 */}
                            <div className="flex gap-2.5">
                                <CircleCheck
                                    className="mt-0.5 h-4 w-4 shrink-0 fill-green-600 text-white"
                                />

                                <div className="min-w-0">
                                    <h3 className="text-xs font-semibold leading-4 text-neutral-800">
                                        Healthy & natural food for lovers of healthy food.
                                    </h3>

                                    <p className="mt-1 text-xs leading-[1.55] text-neutral-400">
                                        Ut quis tempus erat. Phasellus euismod bibendum
                                        magna non tristique. Pellentesque semper vestibulum
                                        elit sed condimentum.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-2.5">
                                <CircleCheck
                                    className="mt-0.5 h-4 w-4 shrink-0 fill-green-600 text-white"
                                />

                                <div className="min-w-0">
                                    <h3 className="text-xs font-semibold leading-4 text-neutral-800">
                                        Every day fresh and quality products for you.
                                    </h3>

                                    <p className="mt-1 text-xs leading-[1.55] text-neutral-400">
                                        Maecenas vehicula a justo quis laoreet. Sed in
                                        placerat nibh, a posuere ex. Morbi sem neque,
                                        aliquam sed orci et.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* CTA */}
                        <Link
                            href="/products"
                            className="group mt-5 inline-flex items-center gap-3 rounded-full bg-green-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-700 hover:shadow-md"
                        >
                            <span>Shop Now</span>

                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5">
                                <ArrowRight className="h-3 w-3" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityComponent;