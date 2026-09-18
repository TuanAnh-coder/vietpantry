import "~/styles/globals.css";

import { type Metadata } from "next";
import { Onest } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import HeaderComponent from "~/components/layout/header";

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

const onest = Onest({
  weight: '500',
  subsets: ["cyrillic-ext"],
})


export default function StoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
          <>
           <HeaderComponent />
          <main className="flex-1 py-10">
            <div className="w-full max-w-7xl mx-auto">
              {children}
            </div>
          </main>
          </>
  );
}
