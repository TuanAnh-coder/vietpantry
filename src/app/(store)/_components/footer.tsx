"use client";

import Link from "next/link";
import {
    ArrowRight,
    ArrowUp,
    Mail,
    MapPin,
    Send,
} from "lucide-react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative mt-32 bg-[#080d17] text-white">
            {/* =========================================
          NEWSLETTER
      ========================================== */}
            <div className="absolute -top-24 left-0 right-0 px-4">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#005b35] shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                    <div className="relative px-7 py-9 md:px-14 md:py-10">
                        {/* Background decoration */}
                        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                            <div className="absolute -left-10 -top-10 text-[180px]">
                                🌿
                            </div>

                            <div className="absolute bottom-[-80px] left-[25%] text-[180px]">
                                🍃
                            </div>
                        </div>

                        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_80px_1.35fr]">
                            {/* Text */}
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                                    Đăng ký nhận tin
                                </h2>

                                <p className="mt-3 max-w-md text-sm leading-6 text-white/80 md:text-base">
                                    Nhận những ưu đãi đặc biệt và thông tin mới nhất về
                                    nông sản Việt Nam từ VietPantry.
                                </p>
                            </div>

                            {/* Arrow */}
                            <div className="hidden justify-center lg:flex">
                                <ArrowRight
                                    className="h-12 w-12 rotate-[25deg] text-white/90"
                                    strokeWidth={1.5}
                                />
                            </div>

                            {/* Form */}
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="flex h-14 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] p-1"
                            >
                                <div className="flex min-w-0 flex-1 items-center px-5">
                                    <Mail className="mr-3 h-4 w-4 shrink-0 text-white/50" />

                                    <input
                                        type="email"
                                        placeholder="Nhập email của bạn"
                                        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/50"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex shrink-0 items-center gap-2 rounded-full bg-[#087d48] px-6 text-xs font-bold uppercase tracking-wide transition hover:bg-[#099457]"
                                >
                                    <span className="hidden sm:inline">
                                        Đăng ký
                                    </span>

                                    <Send className="h-4 w-4 sm:hidden" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================
          FOOTER CONTENT
      ========================================== */}
            <div className="mx-auto max-w-7xl px-6 pb-12 pt-40 md:px-8 md:pt-44 lg:px-10">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.25fr_1fr] lg:gap-16">
                    {/* =====================================
              BRAND
          ====================================== */}
                    <div>
                        {/* Logo */}
                        <Link
                            href="/"
                            className="inline-block"
                        >
                            <span className="text-3xl font-black tracking-tight text-lime-400">
                                Viet
                            </span>

                            <span className="text-3xl font-black tracking-tight text-white">
                                Pantry
                            </span>
                        </Link>

                        <p className="mt-3 text-sm font-medium text-white/50">
                            Hội tụ tinh hoa đất
                        </p>

                        {/* Contact */}
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3 text-sm text-white/80">
                                <MapPin className="h-5 w-5 shrink-0 text-white" />

                                <span>
                                    Việt Nam
                                </span>
                            </div>

                            <div className="flex items-center gap-3 text-sm text-white/80">
                                <Mail className="h-5 w-5 shrink-0 text-white" />

                                <a
                                    href="mailto:hello@vietpantry.vn"
                                    className="transition hover:text-lime-400"
                                >
                                    hello@vietpantry.vn
                                </a>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="mt-8 flex gap-2">
                            <SocialButton>
                                <span className="text-sm font-bold">t</span>
                            </SocialButton>
                        </div>
                    </div>

                    {/* =====================================
              COMPANY
          ====================================== */}
                    <FooterColumn
                        title="Về VietPantry"
                        links={[
                            ["Về chúng tôi", "/about"],
                            ["Liên hệ", "/contact"],
                            ["Cửa hàng", "/shops"],
                            ["Câu hỏi thường gặp", "/faq"],
                        ]}
                    />

                    {/* =====================================
              ORDERS
          ====================================== */}
                    <FooterColumn
                        title="Đơn hàng & hỗ trợ"
                        links={[
                            ["Trung tâm trợ giúp", "/help"],
                            ["Vận chuyển & đổi trả", "/shipping"],
                            ["Điều khoản sử dụng", "/terms"],
                            ["Chính sách hoàn tiền", "/refund"],
                        ]}
                    />

                    {/* =====================================
              ACCOUNT
          ====================================== */}
                    <FooterColumn
                        title="Tài khoản"
                        links={[
                            ["Đăng nhập", "/login"],
                            ["Đăng ký tài khoản", "/register"],
                            ["Danh sách yêu thích", "/wishlist"],
                            ["Đơn hàng của tôi", "/account/orders"],
                        ]}
                    />
                </div>

                {/* =========================================
            BOTTOM
        ========================================== */}
                <div className="mt-14 border-t border-white/10 pt-6">
                    <div className="flex flex-col gap-4 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
                        <p>
                            © {year} VietPantry. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <Link
                                href="/privacy"
                                className="transition hover:text-white"
                            >
                                Chính sách bảo mật
                            </Link>

                            <Link
                                href="/terms"
                                className="transition hover:text-white"
                            >
                                Điều khoản
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

/* =========================================
   FOOTER COLUMN
========================================= */

type FooterColumnProps = {
    title: string;
    links: [string, string][];
};

const FooterColumn = ({
    title,
    links,
}: FooterColumnProps) => {
    return (
        <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                {title}
            </h3>

            <ul className="mt-7 space-y-5">
                {links.map(([label, href]) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className="text-sm text-white/65 transition-all duration-200 hover:translate-x-1 hover:text-lime-400"
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

/* =========================================
   SOCIAL BUTTON
========================================= */

const SocialButton = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <button
            type="button"
            className="
        flex h-12 w-12 items-center justify-center
        rounded-full bg-[#0d1420]
        text-white/90
        transition-all duration-200
        hover:-translate-y-1
        hover:bg-emerald-600
        hover:text-white
      "
        >
            {children}
        </button>
    );
};

export default Footer;