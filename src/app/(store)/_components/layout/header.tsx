"use client"

import Image from "next/image";
import Link from "next/link";
import { Input } from "../../../../components/ui/input";
import { Heart, Search, ShoppingCart, User2, type LucideIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../../components/ui/tooltip";
import { Badge } from "../../../../components/ui/badge";
import { usePathname } from "next/navigation";

interface UserNavItem {
    tooltip: string;
    icon: LucideIcon;
    href: string;
    count?: number;
}

const USER_NAV_ITEMS: UserNavItem[] = [
    { tooltip: "Login/Signup", icon: User2, href: "/login" },
    { tooltip: "Cart", icon: ShoppingCart, href: "/cart", count: 3 },
    { tooltip: "Favorite", icon: Heart, href: "/favorite", count: 5 },
];
const NavItem = [
    { name: "Trang chủ", href: "/" },
    { name: "Danh mục", href: "/categories" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Liên hệ", href: "/contact" },
];
const HeaderComponent = () => {
    const pathname = usePathname();
    return (
        <header className="py-2 shadow-md">
            <div className="w-full max-w-7xl mx-auto">
                {/* Top header */}
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-end gap-1">
                        <Image src="/favicon.ico" alt="Logo" width={36} height={36} />
                        <span className="text-2xl font-bold bg-gradient-to-b from-[#0ba360] to-[#3cba92] bg-clip-text text-transparent">
                            VietPantry
                        </span>
                    </Link>
                    <div className="py-1 ml-1 flex flex-row-reverse justify-start items-stretch w-full max-w-3xl border-2 border-green-600 rounded-sm overflow-hidden">
                        <Input
                            placeholder="Tìm kiếm sản phẩm"
                            className="!text-[12px] font-normal p-1 border-none rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                        />
                        <Button variant="ghost" className="border-none rounded-none hover:bg-transparent cursor-pointer hover:text-green-700">
                            <Search className="w-5 h-5" strokeWidth={2.5} />
                        </Button>
                    </div>
                    <TooltipProvider>
                        <div className="flex w-full max-w-[120px] items-center justify-between">
                            {USER_NAV_ITEMS.map(({ tooltip, icon: Icon, href, count }) => {
                                const hasCount = !!count && count > 0;

                                return (
                                    <Tooltip key={href}>
                                        <TooltipTrigger>
                                            <Link
                                                href={href}
                                                aria-label={
                                                    hasCount ? `${tooltip} (${count})` : tooltip
                                                }
                                                className="relative text-gray-700 transition-colors hover:text-green-600"
                                            >
                                                <Icon className="h-5 w-5" />

                                                {hasCount && (
                                                    <Badge className="bg-gradient-to-b from-[#0ba360] to-[#3cba92] font-semibold absolute -right-2.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[11px]">
                                                        {count}
                                                    </Badge>
                                                )}
                                            </Link>
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            <p>{hasCount ? `${tooltip} (${count})` : tooltip}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                );
                            })}
                        </div>
                    </TooltipProvider>
                </div>
                {/* Navigation */}
                <nav className="mx-auto flex w-full max-w-xs items-center justify-between pt-3">
                    {NavItem.map((item) => {
                        const active = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-[13px] font-medium transition-colors ${active
                                    ? "text-[#0ba360]"
                                    : "text-gray-700 hover:text-[#0ba360]"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    )
}
export default HeaderComponent;
