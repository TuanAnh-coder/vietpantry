import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Nunito_Sans } from "next/font/google";

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

const onest = Nunito_Sans({})


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${onest.className}`}>
      <body className="min-h-full flex flex-col bg-white">
        <TRPCReactProvider>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
