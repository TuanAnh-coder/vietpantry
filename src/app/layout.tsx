import "~/styles/globals.css";

import { type Metadata } from "next";
import { Onest } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import HeaderComponent from "~/app/(store)/_components/layout/header";

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


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${onest.className}`}>
      <body className="min-h-full flex flex-col">
        <TRPCReactProvider>
            {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
