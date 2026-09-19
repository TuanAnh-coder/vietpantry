import "~/styles/globals.css";

import { type Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { AppSidebar } from "../admin/_components/app-sidebar";


export const metadata: Metadata = {
    title: "VietPantry - Seller Dashboard",
    description: "VietPantry - Nông sản Việt Nam",
    icons: [
        {
            rel: "icon",
            url: "/favicon.ico",
        },
    ],
};

export default function SellerLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}
