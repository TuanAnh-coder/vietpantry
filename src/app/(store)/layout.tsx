import { type Metadata } from "next";
import HeaderComponent from "~/app/(store)/_components/header";
import Footer from "./_components/footer";

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



export default function StoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HeaderComponent />
      <main className="bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
