"use client"
import { Heart, Icon, Search, ShoppingCart, User2, type LucideIcon } from "lucide-react";
import { ItunesMeta } from "next/dist/lib/metadata/generate/basic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "~/components/ui/input";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";
type Navagation = {
    link: string,
    title: string,
}
const navigation: Navagation[] = [
    {
        title: "Trang chủ",
        link: "/"
    },
    {
        title: "Danh mục",
        link: "/categories"
    },
    {
        title: "Products",
        link: "/products"
    },
    {
        title: "Blogs",
        link: "/blogs"
    },
]
const user = [
    {
        link: "/login",
        title: "Login/Register",
        icon: User2
    },
    {
        link: "/cart",
        title: "Giỏ hàng",
        icon: ShoppingCart
    },
    {
        link: "/favorite",
        title: "Yêu thích",
        icon: Heart
    },
]
const HeaderComponent = () => {
    const path = usePathname()
    return (
        <header className="relative z-10 bg-[#00241a]">
            <div className="w-full mx-auto max-w-7xl flex justify-between items-center py-4">
                {/* Logo */}
                <Link href="/" className="group inline-flex items-center gap-2 select-none">
                    <Image src="/favicon.ico" alt="VietPantry" width={40} height={40} className="size-10 object-contain transition-transform duration-300 group-hover:scale-105" priority />
                    <span className="text-[26px] font-black italic leading-none tracking-[-0.055em] bg-gradient-to-b from-[#38B96B] via-[#168A4A] to-[#086B3C] bg-clip-text text-transparent [text-shadow:0_1px_0_#B8F5C8,0_2px_1px_rgba(0,70,35,0.45),0_4px_6px_rgba(0,70,35,0.2)] transition-all duration-300 group-hover:brightness-110">
                        VietPantry
                    </span>
                </Link>
                {/* Navigation */}
                <NavigationMenu>
                    <NavigationMenuList>
                        {navigation.map((item, index) => (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuLink className={`font-bold text-sm hover:text-green-500 hover:bg-transparent transition-all duration-700 ease-in-out ${path === item.link ? "text-green-500" : "text-white"}`} render={<Link href={item.link}>{item.title}</Link>} />
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                {/* Search Component */}
                <div className="relative w-full max-w-lg">
                    <Input placeholder="Search products" className="bg-white py-5 w-full rounded-full" />
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 mr-2 rounded-full p-2 cursor-pointer flex items-center justify-center bg-[#00241a] text-white hover:bg-green-700">
                        <Search className="size-4" />
                    </div>
                </div>
                {/* User */}
                <TooltipProvider>
                    <NavigationMenu>
                        <NavigationMenuList className={"justify-end gap-4"}>
                            {user.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <NavigationMenuItem key={item.link} className={"text-white"}>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <NavigationMenuLink className={"hover:bg-green-500 w-full h-full rounded-full border border-[#01693a] p-3"}
                                                    render={
                                                        <Link href={item.link}>
                                                            <Icon className="size-5" />
                                                        </Link>
                                                    }
                                                />
                                            </TooltipTrigger>

                                            <TooltipContent side="bottom">
                                                {item.title}
                                            </TooltipContent>
                                        </Tooltip>
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </TooltipProvider>
            </div>
        </header>
    )
}
export default HeaderComponent;