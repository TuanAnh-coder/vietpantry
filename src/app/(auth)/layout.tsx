import "~/styles/globals.css";
import { type Metadata } from "next";
import AuthTransition from "./_components/auth-transition";

export const metadata: Metadata = {
    title: "VietPantry - Hội tụ tinh hoa đất Việt",
    description: "VietPantry - Nông sản Việt Nam",
    icons: [
        {
            rel: "icon",
            url: "/favicon.ico",
        },
    ],
};

export default function AuthLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="bg-[url(/background-2.webp)] w-full min-h-screen bg-cover bg-no-repeat flex justify-end">
            <div className="w-xl min-h-screen bg-[#F7F6F0] overflow-hidden">
                <AuthTransition>{children}</AuthTransition>
            </div>
        </main>
    );
}
