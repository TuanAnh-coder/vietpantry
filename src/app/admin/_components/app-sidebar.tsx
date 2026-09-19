"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "../../../components/ui/sidebar"
import { ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
const NavItem = [
    {
        href: "/",
        title: "Trang chủ"
    },
    {
        href: "/dashboard",
        title: "Thống kê"
    },
    {
        href: "/campaigns",
        title: "Chiến dịch"
    },
    {
        href: "/categories",
        title: "Danh mục"
    },
]
export function AppSidebar() {
    return (
        <Sidebar>
            <Sidebar>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger render={<SidebarMenuButton />}>
                                    Select Workspace
                                    <ChevronDown className="ml-auto" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <span>Acme Inc</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
            </Sidebar>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}