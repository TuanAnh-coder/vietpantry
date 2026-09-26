import "~/styles/globals.css";

import { type Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import SidebarLayout from "../_components/app-sidebar";


export const metadata: Metadata = {
    title: "VietPantry - Dashboard",
    description: "VietPantry - Nông sản Việt Nam",
    authors: [
        {
        name: "TuanAnh-Coder",
        },
    ],
    icons: [
        {
            rel: "icon",
            url: "/favicon.ico",
        },
    ],
};

export default function AdminLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <SidebarProvider>
            <SidebarLayout />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}
